const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 8080;
const ROOT_DIR = __dirname;
const DUAS_FILE = path.join(ROOT_DIR, 'data', 'duas.json');

// Ensure data directory and file exist
if (!fs.existsSync(path.join(ROOT_DIR, 'data'))) {
  fs.mkdirSync(path.join(ROOT_DIR, 'data'), { recursive: true });
}
if (!fs.existsSync(DUAS_FILE)) {
  fs.writeFileSync(DUAS_FILE, JSON.stringify([], null, 2));
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.wav': 'audio/wav',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API: Submit Dua
  if (req.method === 'POST' && pathname === '/api/submit-dua') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        const sender = payload.sender || payload.name || 'Anonymous Guest';
        const side = payload.side || 'groom';
        const msg = payload.msg || payload.message || '';
        const date = payload.date || new Date().toLocaleDateString('en-US');

        if (!msg.trim()) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Message is required' }));
          return;
        }

        const newDua = {
          id: 'dua_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
          name: sender,
          side: side,
          message: msg,
          date: date,
          timestamp: new Date().toISOString(),
          notifiedEmails: ['sk.iqra1710@gmail.com', 'shaikshahid570@gmail.com']
        };

        let existing = [];
        try {
          existing = JSON.parse(fs.readFileSync(DUAS_FILE, 'utf8') || '[]');
        } catch (e) {
          existing = [];
        }

        existing.unshift(newDua);
        fs.writeFileSync(DUAS_FILE, JSON.stringify(existing, null, 2));

        console.log(`[DUA SUBMITTED] From: ${sender} (${side}) -> Stored & Delivered for Iqra & Shahid`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Dua received and saved successfully!',
          dua: newDua,
          recipients: ['sk.iqra1710@gmail.com', 'shaikshahid570@gmail.com']
        }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // API: Fetch All Duas
  if (req.method === 'GET' && pathname === '/api/duas') {
    try {
      const data = fs.readFileSync(DUAS_FILE, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    } catch (e) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('[]');
    }
    return;
  }

  // Static File Serving
  let filePath = path.join(ROOT_DIR, pathname === '/' ? 'index.html' : pathname);

  // Prevent path traversal
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Access Denied');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Set caching headers for assets
    if (ext === '.mp3' || ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else {
      res.setHeader('Cache-Control', 'no-cache');
    }

    // Support HTTP Range requests (essential for iOS Safari, Chrome, and audio seeking)
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;

      if (isNaN(start) || start >= stats.size || end >= stats.size || start > end) {
        res.writeHead(416, {
          'Content-Range': `bytes */${stats.size}`,
          'Content-Type': 'text/plain'
        });
        res.end('Requested range not satisfiable');
        return;
      }

      const chunkSize = (end - start) + 1;
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType
      });
      fs.createReadStream(filePath, { start, end }).pipe(res);
      return;
    }

    res.writeHead(200, {
      'Content-Length': stats.size,
      'Accept-Ranges': 'bytes',
      'Content-Type': contentType
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`✨ Royal Wedding Invitation Server is running at: http://localhost:${PORT}`);
});
