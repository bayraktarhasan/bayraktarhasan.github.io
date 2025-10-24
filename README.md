# Developer Portfolio

Eine moderne, SEO-optimierte und leichtgewichtige persönliche Entwickler-Webseite als Showcase für Bewerbungen und professionelle Kontakte.

## 🚀 Features

- ✨ **Minimalistisches Design** - Sauberes, professionelles Layout
- 🎨 **Dark/Light Mode** - Umschaltbare Themes mit LocalStorage-Persistenz
- 📱 **Fully Responsive** - Mobile-First Design, optimiert für alle Geräte
- ⚡ **Performance-optimiert** - Schnelle Ladezeiten, Core Web Vitals freundlich
- 🔍 **SEO-optimiert** - Meta-Tags, strukturierte Daten (JSON-LD), OpenGraph
- ♿ **Accessibility** - WCAG-konform, Tastaturnavigation, Screen-Reader-freundlich
- 🎯 **Vanilla JavaScript** - Keine schweren Frameworks, pure Performance
- 📦 **Statische Dateien** - Einfach zu hosten auf jedem Webserver

## 📁 Projektstruktur

```
developer-portfolio/
├── index.html              # Haupt-HTML-Datei
├── manifest.json           # PWA-Manifest
├── README.md              # Diese Datei
├── assets/
│   ├── css/
│   │   └── style.css      # Haupt-Stylesheet
│   ├── js/
│   │   └── script.js      # JavaScript-Funktionalität
│   └── images/
│       ├── favicon.svg    # Favicon
│       ├── project-1.jpg  # Projektbilder (optional)
│       ├── project-2.jpg
│       ├── project-3.jpg
│       └── project-4.jpg
```

## 🛠️ Installation & Lokale Entwicklung

### Voraussetzungen

- Moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Optional: Lokaler Webserver (Live Server, Python HTTP Server, etc.)

### Schritte

1. **Projekt klonen oder herunterladen**
   ```bash
   # Wenn du Git verwendest
   git clone https://github.com/deinusername/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Lokal öffnen**
   
   **Option A: Mit VS Code Live Server**
   - Installiere die Extension "Live Server" in VS Code
   - Rechtsklick auf `index.html` → "Open with Live Server"
   - Die Seite öffnet sich unter `http://localhost:5500`

   **Option B: Mit Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Dann öffne: http://localhost:8000
   ```

   **Option C: Mit Node.js (http-server)**
   ```bash
   npx http-server -p 8000
   ```

   **Option D: Direkt im Browser**
   - Doppelklick auf `index.html`
   - (Manche Features wie Fonts könnten im Dateisystem nicht funktionieren)

## ✏️ Anpassung der Inhalte

### 1. Persönliche Informationen ändern

Öffne `index.html` und ersetze folgende Platzhalter:

```html
<!-- Name -->
<h1>Hi, ich bin <span class="highlight">Max Mustermann</span></h1>

<!-- Email -->
<a href="mailto:max.mustermann@example.com">max.mustermann@example.com</a>

<!-- Social Links -->
<a href="https://github.com/maxmustermann">GitHub</a>
<a href="https://linkedin.com/in/maxmustermann">LinkedIn</a>
```

### 2. SEO Meta-Tags anpassen

Im `<head>`-Bereich von `index.html`:

```html
<title>Dein Name - Full Stack Developer | Portfolio</title>
<meta name="description" content="Deine Beschreibung...">
<meta property="og:url" content="https://deinewebsite.de/">
```

### 3. Projekte hinzufügen/ändern

Finde die `.project-card` Elemente im HTML und passe sie an:

```html
<article class="project-card">
    <div class="project-image">
        <img src="assets/images/dein-projekt.jpg" alt="Projekt Name">
        <!-- ... -->
    </div>
    <div class="project-content">
        <h3 class="project-title">Dein Projekt</h3>
        <p class="project-description">Beschreibung...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <!-- Weitere Tech-Tags -->
        </div>
    </div>
</article>
```

### 4. Berufserfahrung anpassen

Bearbeite die `.timeline-item` Elemente:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="timeline-date">2022 - Heute</div>
        <h3 class="timeline-title">Deine Position</h3>
        <h4 class="timeline-company">Deine Firma</h4>
        <!-- ... -->
    </div>
</div>
```

### 5. Farben & Design anpassen

In `assets/css/style.css` am Anfang der Datei:

```css
:root {
    --primary-color: #3b82f6;      /* Hauptfarbe */
    --secondary-color: #8b5cf6;    /* Sekundärfarbe */
    --accent-color: #10b981;       /* Akzentfarbe */
    /* ... weitere Variablen */
}
```

## 🌐 Deployment

### GitHub Pages (Kostenlos)

1. **Repository erstellen**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/deinusername/portfolio.git
   git push -u origin main
   ```

2. **GitHub Pages aktivieren**
   - Gehe zu Repository → Settings → Pages
   - Source: "main" branch, "/" (root)
   - Speichern
   - Deine Seite ist verfügbar unter: `https://deinusername.github.io/portfolio/`

### Vercel (Empfohlen)

1. **Bei Vercel anmelden**
   - Gehe zu [vercel.com](https://vercel.com)
   - Melde dich mit GitHub an

2. **Projekt importieren**
   - "New Project" → Wähle dein GitHub Repository
   - Deploy!
   - Deine Seite ist sofort live mit einer `.vercel.app` Domain

3. **Custom Domain (Optional)**
   - In Vercel: Settings → Domains
   - Füge deine eigene Domain hinzu

### Netlify

1. **Bei Netlify anmelden**
   - Gehe zu [netlify.com](https://netlify.com)
   - Melde dich mit GitHub an

2. **Drag & Drop Deployment**
   - Ziehe den `developer-portfolio` Ordner auf netlify.com/drop
   - Oder verbinde dein GitHub Repository
   - Fertig!

### Cloudflare Pages

1. **GitHub Repo verbinden**
   - In Cloudflare Dashboard → Pages
   - "Create a project" → Connect GitHub
   - Wähle dein Repository

2. **Build Settings**
   - Build command: (leer lassen für statische Sites)
   - Output directory: `/`
   - Deploy!

## 📧 Kontaktformular einrichten

Das Formular ist vorbereitet, aber benötigt einen Backend-Service:

### Option 1: Formspree (Einfachste Lösung)

1. Registriere dich bei [formspree.io](https://formspree.io)
2. Erstelle ein neues Formular
3. Füge den Code in `assets/js/script.js` ein:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

### Option 2: EmailJS

1. Registriere dich bei [emailjs.com](https://www.emailjs.com)
2. Erstelle einen Email-Service
3. Binde die EmailJS-Library ein und konfiguriere sie

### Option 3: Eigenes Backend

Erstelle eine serverless Function (Vercel, Netlify Functions, AWS Lambda) die E-Mails versendet.

## 🎨 Projektbilder hinzufügen

1. Erstelle Screenshots oder Mockups deiner Projekte
2. Optimiere die Bilder (empfohlen: WebP-Format, max. 800x600px)
3. Speichere sie in `assets/images/` als:
   - `project-1.jpg`
   - `project-2.jpg`
   - `project-3.jpg`
   - `project-4.jpg`

**Tipp:** Nutze Tools wie [TinyPNG](https://tinypng.com) oder [Squoosh](https://squoosh.app) zur Bildoptimierung.

## 🔧 Erweiterte Anpassungen

### Icons ändern

Die Social Media Icons sind inline SVG. Du kannst sie durch andere ersetzen von:
- [Heroicons](https://heroicons.com)
- [Feather Icons](https://feathericons.com)
- [Font Awesome](https://fontawesome.com)

### Schriftart ändern

In `index.html` (im `<head>`):

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

In `style.css`:

```css
:root {
    --font-primary: 'Poppins', sans-serif;
}
```

### PWA aktivieren

1. Erstelle Icons (192x192 und 512x512) und speichere sie in `assets/images/`
2. Manifest ist bereits vorhanden (`manifest.json`)
3. Optional: Erstelle einen Service Worker für Offline-Funktionalität

## 📊 Performance-Tipps

- **Bilder komprimieren**: Nutze WebP-Format und optimiere alle Bilder
- **Lazy Loading**: Bereits implementiert für Bilder
- **Minify**: Für Production, minifiziere CSS und JS
- **CDN**: Nutze einen CDN-Service für schnellere Auslieferung
- **Lighthouse**: Teste mit Chrome DevTools → Lighthouse

## 📝 Impressum & Datenschutz

Erstelle zusätzliche Seiten:

1. `impressum.html` - Deine rechtlichen Angaben
2. `datenschutz.html` - Datenschutzerklärung (DSGVO)

**Wichtig:** In Deutschland/EU benötigst du ein Impressum und eine Datenschutzerklärung!

Generatoren:
- [Impressum Generator](https://www.e-recht24.de/impressum-generator.html)
- [Datenschutz Generator](https://www.e-recht24.de/muster-datenschutzerklaerung.html)

## 🐛 Troubleshooting

### Fonts werden nicht geladen
- Überprüfe die Internet-Verbindung
- Teste mit lokalen System-Fonts

### Dark Mode funktioniert nicht
- Prüfe ob JavaScript aktiviert ist
- Lösche den LocalStorage: `localStorage.clear()`

### Kontaktformular sendet nicht
- Siehe "Kontaktformular einrichten" Sektion
- Überprüfe die Browser-Console auf Fehler

## 📄 Lizenz

Dieses Projekt ist als Template gedacht. Du kannst es frei verwenden und anpassen für deine persönlichen Zwecke.

## 🤝 Support & Kontakt

Bei Fragen oder Problemen:
- Erstelle ein Issue auf GitHub
- Kontaktiere mich direkt über die Webseite

## 🎉 Credits

- Icons: Inline SVG
- Fonts: Google Fonts (Inter)
- Design: Custom, modern minimalistisch
- Entwickelt mit ❤️ und Vanilla JavaScript

---

**Viel Erfolg mit deinem Portfolio! 🚀**
