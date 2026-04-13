import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { google } from "googleapis";
import type { Connect } from 'vite';
import type { ViteDevServer } from 'vite';
import type { ServerResponse } from 'http';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: 'api-server',
      configureServer(server: ViteDevServer) {
        server.middlewares.use(async (req: Connect.IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
          if (req.url === '/api/cards' && req.method === 'GET') {

            let credentials;
            if (mode === 'development') {
              const credentialsPath = path.resolve(__dirname, 'credentials.json');
              credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));
            } else {
              const credentialsEnv = process.env.GOOGLE_CREDENTIALS;
              if (!credentialsEnv) {
                throw new Error('GOOGLE_CREDENTIALS environment variable not set');
              }
              credentials = JSON.parse(credentialsEnv);
            }

            try {
              const auth = new google.auth.GoogleAuth({
                credentials: credentials,
                scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
              });

              const sheets = google.sheets({ version: "v4", auth });
              const response = await sheets.spreadsheets.values.get({
                spreadsheetId: "1ncQL3UiVBVvpW2ggKTDMgcgAx51pq3dz-ZeQj0j39fo",
                range: "Sheet1"
              });

              const rows = response.data.values;
              if (!rows || rows.length === 0) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'No data found' }));
                return;
              }

              const headers = rows[0];
              const jsonData = rows.slice(1).map((row: string[]) => {
                let obj: Record<string, string> = {};
                headers.forEach((header: string, index: number) => {
                  obj[header] = row[index] || "";
                });
                return obj;
              });

              const parsedData = jsonData.map((card: any) => ({
                id: card.id || "",
                bank: card.bank || "",
                name: card.name || "",
                category: card.category ? card.category.split("|").map((s: string) => s.trim()) : [],
                type: card.type || "",
                joining_fee: Number(card.joining_fee) || 0,
                annual_fee: Number(card.annual_fee) || 0,
                reward_rate: card.reward_rate || "",
                benefits: card.benefits ? card.benefits.split("|").map((s: string) => s.trim()) : [],
                image: card.image || "",
                tags: card.tags ? card.tags.split("|").map((s: string) => s.trim()) : [],
                eligibility: {
                  min_salary: Number(card.min_salary) || 0,
                  recommended_for: card.recommended_for
                    ? card.recommended_for.split("|").map((s: string) => s.trim())
                    : []
                },
                apply_url: card.apply_url || "#",
                rating: Number(card.rating) || 0
              }));

              res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
              res.end(JSON.stringify(parsedData));
            } catch (error) {
              console.error('Error fetching cards:', error);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Failed to fetch cards' }));
            }
          } else {
            next();
          }
        });
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
