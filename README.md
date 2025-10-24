# Developer Portfolio - Hasan Bayraktar

Moderne, bilinguale (Deutsch/Englisch) Portfolio-Webseite für Full Stack Developer mit Dark Mode Design und responsive Mobile Navigation.

## 🚀 Features

- 🌍 **Bilingual** - Vollständige Deutsch/Englisch Unterstützung mit Language-Switcher
- � **Dark Mode Only** - Modernes dunkles Design als Standard
- 📱 **Mobile-First Responsive** - Hamburger-Menü mit Slide-in Navigation
- ⚡ **Performance-optimiert** - Schnelle Ladezeiten, Core Web Vitals freundlich
- 🔍 **SEO-optimiert** - Meta-Tags, strukturierte Daten (JSON-LD), OpenGraph
- ♿ **Accessibility** - WCAG-konform, Tastaturnavigation, Screen-Reader-freundlich
- 🎯 **Vanilla JavaScript** - Keine schweren Frameworks, pure Performance
- 📦 **Statische Dateien** - Einfach zu hosten auf jedem Webserver
- 💾 **LocalStorage Persistenz** - Sprachauswahl wird gespeichert

## 📁 Projektstruktur

```
developer-portfolio/
├── index.html              # Haupt-HTML-Datei (Bilingual)
├── impressum.html          # Impressum-Seite
├── datenschutz.html        # Datenschutzerklärung
├── manifest.json           # PWA-Manifest
├── README.md              # Diese Datei
├── DEPLOYMENT.md          # Deployment-Anleitung
├── assets/
│   ├── css/
│   │   └── style.css      # Haupt-Stylesheet (Dark Mode)
│   ├── js/
│   │   └── script.js      # JavaScript (Language Switcher, Mobile Menu)
│   └── images/
│       ├── favicon.svg    # Favicon
│       ├── project-1.jpg  # Sally's Cafe Projekt
│       └── project-2.jpg  # MLK Abdichtungstechnik Projekt
```

## 🌐 Live Demo

- **GitHub Pages**: [bayraktarhasan.github.io](https://bayraktarhasan.github.io)
- **LinkedIn**: [Hasan Bayraktar](https://at.linkedin.com/in/hasan-bayraktar-632a95154)
- **GitHub**: [github.com/bayraktarhasan](https://github.com/bayraktarhasan)

## 💻 Tech Stack

### Dargestellt im Portfolio:
- **Frontend**: Angular, React, React Native, JavaScript, HTML/CSS
- **Backend**: Java, Spring Boot, Python, PHP, REST APIs
- **Tools & Datenbanken**: Git, SQL, Mindbreeze, Elasticsearch

### Verwendete Technologien für die Website:
- **HTML5** - Semantisches Markup
- **CSS3** - CSS Grid, Flexbox, CSS Variables
- **Vanilla JavaScript** - Language Switcher, Mobile Menu, Smooth Scrolling
- **Google Fonts** - Inter (300-700 weights)
- **No Dependencies** - Keine externe Libraries

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
   python -m http.server 8001
   
   # Dann öffne: http://localhost:8001
   ```

   **Option C: Mit Node.js (http-server)**
   ```bash
   npx http-server -p 8001
   ```

   **Option D: Direkt im Browser**
   - Doppelklick auf `index.html`
   - (Manche Features wie Fonts könnten im Dateisystem nicht funktionieren)

## ✏️ Anpassung der Inhalte

### Wichtig: Bilinguale Struktur

Diese Website unterstützt Deutsch (Standard) und Englisch. Alle übersetzbaren Texte verwenden `data-de` und `data-en` Attribute:

```html
<h1 data-de="Deutscher Text" data-en="English Text">Deutscher Text</h1>
```

### 1. Persönliche Informationen ändern

Öffne `index.html` und ersetze folgende Inhalte:

```html
<!-- Name im Hero-Bereich -->
<h1 class="hero-title" 
    data-de="Hi, ich bin <span class='highlight'>Dein Name</span>" 
    data-en="Hi, I'm <span class='highlight'>Your Name</span>">
    Hi, ich bin <span class="highlight">Dein Name</span>
</h1>

<!-- Über mich Sektion -->
<p data-de="Dein deutscher Text..." data-en="Your English text...">
    Dein deutscher Text...
</p>

<!-- Email -->
<a href="mailto:deine@email.com">deine@email.com</a>

<!-- Social Links -->
<a href="https://github.com/deinusername">GitHub</a>
<a href="https://linkedin.com/in/deinprofil">LinkedIn</a>
```

### 2. Sprachübersetzungen anpassen

**Alle Texte mit `data-de` und `data-en` werden automatisch übersetzt!**

Beispiele:
```html
<!-- Navigation -->
<a href="#about" class="nav-link" data-de="Über mich" data-en="About">Über mich</a>

<!-- Buttons -->
<a href="#projects" class="btn">
    <span data-de="Projekte ansehen" data-en="View Projects">Projekte ansehen</span>
</a>

<!-- Inhalte -->
<h2 data-de="Meine Projekte" data-en="My Projects">Meine Projekte</h2>
```

### 3. SEO Meta-Tags anpassen

Im `<head>`-Bereich von `index.html`:

```html
<title>Dein Name - Full Stack Developer | Portfolio</title>
<meta name="description" content="Deine Beschreibung...">
<meta property="og:url" content="https://deinewebsite.de/">
<meta property="og:title" content="Dein Name - Full Stack Developer">
```

### 4. Projekte hinzufügen/ändern

Aktuelle Projekte im Portfolio:
1. **Sally's Cafe & Imbiss** - Next.js, React, Cockpit CMS
2. **MLK Abdichtungstechnik** - WordPress, PHP, CSS, SEO

Finde die `.project-card` Elemente im HTML und passe sie an:

```html
<article class="project-card">
    <div class="project-image">
        <img src="assets/images/dein-projekt.jpg" alt="Projekt Name">
    </div>
    <div class="project-content">
        <h3 class="project-title" data-de="Deutscher Titel" data-en="English Title">
            Deutscher Titel
        </h3>
        <p class="project-description" 
           data-de="Deutsche Beschreibung..." 
           data-en="English description...">
            Deutsche Beschreibung...
        </p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
        <div class="project-links">
            <a href="https://projekturl.de" target="_blank">
                <span data-de="Live Demo" data-en="Live Demo">Live Demo</span>
            </a>
        </div>
    </div>
</article>
```

### 5. Berufserfahrung anpassen

Aktuelle Timeline:
1. **2019 - Heute**: Full Stack Developer @ 3 Banken IT
2. **2018 - 2019**: Web Entwickler @ Lackner Media  
3. **2018**: IT-Kolleg Abschluss @ IT-Kolleg Imst, Austria

Bearbeite die `.timeline-item` Elemente:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="timeline-date" data-de="2022 - Heute" data-en="2022 - Present">
            2022 - Heute
        </div>
        <h3 class="timeline-title" data-de="Deine Position" data-en="Your Position">
            Deine Position
        </h3>
        <h4 class="timeline-company">Deine Firma</h4>
        <p data-de="Deutsche Beschreibung..." data-en="English description...">
            Deutsche Beschreibung...
        </p>
    </div>
</div>
```

### 6. Design & Farben anpassen

Die Seite verwendet **nur Dark Mode**. Farben in `assets/css/style.css`:

```css
:root {
    /* Hauptfarben */
    --primary-color: #3b82f6;      /* Blau - Hauptfarbe */
    --secondary-color: #8b5cf6;    /* Lila - Sekundärfarbe */
    --accent-color: #10b981;       /* Grün - Akzentfarbe */
    
    /* Dark Mode Theme */
    --bg-primary: #0a0a0a;         /* Haupthintergrund */
    --bg-secondary: #141414;       /* Cards/Navigation */
    --text-primary: #e5e7eb;       /* Haupttext */
    --border-color: #262626;       /* Rahmen */
}
```

## 🌐 Deployment

Detaillierte Deployment-Anleitung findest du in [DEPLOYMENT.md](DEPLOYMENT.md)

### Quick Start: GitHub Pages

1. **Repository erstellen**
   ```bash
   cd developer-portfolio
   git init
   git add .
   git commit -m "Initial commit: Bilingual portfolio with dark mode"
   git branch -M main
   git remote add origin https://github.com/deinusername/deinusername.github.io.git
   git push -u origin main
   ```

2. **GitHub Pages aktivieren**
   - Gehe zu Repository → Settings → Pages
   - Source: "main" branch, "/" (root)
   - Speichern
   - Deine Seite ist verfügbar unter: `https://deinusername.github.io/`

### Alternative Hosting-Optionen

- **Vercel**: Automatisches Deployment via GitHub
- **Netlify**: Drag & Drop oder Git-Integration
- **Cloudflare Pages**: Schnelle globale Auslieferung
- **GitHub Pages**: Kostenlos für öffentliche Repos

##  Erweiterte Anpassungen

### Language Switcher Funktionalität

Der Language Switcher verwendet LocalStorage zur Persistenz:

```javascript
// In script.js - Sprache wechseln
let currentLang = localStorage.getItem('language') || 'de';

// Alle Elemente mit data-de und data-en werden automatisch übersetzt
const translatableElements = document.querySelectorAll('[data-de][data-en]');
```

**Desktop**: Language-Switcher rechts in der Navigation  
**Mobile**: Language-Switcher links neben dem Hamburger-Icon

### Mobile Navigation

Die mobile Navigation verwendet ein Hamburger-Menü mit Slide-in Drawer:

- **Hamburger-Icon**: Transformiert zu "X" wenn aktiv
- **Slide-in Menü**: 280px breiter Drawer von rechts
- **Auto-Close**: Schließt automatisch bei Link-Klick oder außerhalb-Klick
- **Responsive**: Aktiviert bei `max-width: 768px`

```css
/* Mobile Controls (Language + Hamburger) */
.nav-controls {
    display: flex; /* Nur auf Mobile sichtbar */
    gap: 1rem;
}
```

### Icons ändern

Die Social Media Icons sind inline SVG. Du kannst sie durch andere ersetzen von:
- [Heroicons](https://heroicons.com)
- [Feather Icons](https://feathericons.com)
- [Lucide Icons](https://lucide.dev)

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

## 📊 Performance-Tipps

- **Bilder komprimieren**: Nutze WebP-Format und optimiere alle Bilder
- **Lazy Loading**: Bereits implementiert für Bilder
- **Minify**: Für Production, minifiziere CSS und JS
- **CDN**: Nutze einen CDN-Service für schnellere Auslieferung
- **Lighthouse**: Teste mit Chrome DevTools → Lighthouse

## 📝 Impressum & Datenschutz

✅ **Bereits implementiert!**

Die Seite enthält bereits:
1. `impressum.html` - Rechtliche Angaben
2. `datenschutz.html` - Datenschutzerklärung (DSGVO-konform)

**Wichtig:** Passe diese Seiten mit deinen eigenen Daten an!

Links im Footer:
```html
<a href="impressum.html" data-de="Impressum" data-en="Imprint">Impressum</a>
<a href="datenschutz.html" data-de="Datenschutz" data-en="Privacy">Datenschutz</a>
```

Generatoren für eigene Inhalte:
- [Impressum Generator](https://www.e-recht24.de/impressum-generator.html)
- [Datenschutz Generator](https://www.e-recht24.de/muster-datenschutzerklaerung.html)

## � Performance & SEO

### Bereits implementiert:

- ✅ **Semantic HTML5** - Strukturierte Markup
- ✅ **Meta Tags** - Title, Description, Keywords
- ✅ **Open Graph** - Social Media Sharing
- ✅ **Twitter Cards** - Twitter Integration  
- ✅ **JSON-LD** - Structured Data (schema.org Person)
- ✅ **Lazy Loading** - Bilder werden verzögert geladen
- ✅ **Responsive Images** - Optimiert für verschiedene Bildschirmgrößen
- ✅ **CSS Variables** - Wartbare Styles
- ✅ **Vanilla JavaScript** - Keine Heavy Dependencies

### Performance-Tipps:

- **Bilder komprimieren**: Nutze WebP-Format und optimiere alle Bilder
- **Lighthouse Test**: Chrome DevTools → Lighthouse für Performance-Check
- **CDN nutzen**: Für schnellere globale Auslieferung
- **Minify für Production**: CSS und JS komprimieren

Tools:
- [TinyPNG](https://tinypng.com) - Bildkomprimierung
- [Squoosh](https://squoosh.app) - WebP Konvertierung
- [PageSpeed Insights](https://pagespeed.web.dev/) - Performance-Analyse

### Sprache wechselt nicht
- Überprüfe ob JavaScript aktiviert ist
- Stelle sicher, dass alle Texte `data-de` und `data-en` Attribute haben
- Lösche den LocalStorage: `localStorage.clear()` in Browser Console

### Mobile Menü öffnet nicht
- Prüfe ob JavaScript aktiviert ist
- Überprüfe die Browser-Console auf Fehler
- Teste auf einem echten Gerät (nicht nur Browser DevTools)

### Fonts werden nicht geladen
- Überprüfe die Internet-Verbindung
- Teste mit lokalen System-Fonts als Fallback

### Language-Switcher zeigt nicht richtig an
- Beide Buttons (Desktop & Mobile) sollten synchron sein
- Prüfe ob `updateLanguageDisplay()` alle `.lang-de` und `.lang-en` Elemente findet

### Hamburger-Menü schließt nicht automatisch
- Menü sollte schließen bei:
  - Klick auf einen Nav-Link ✅
  - Klick außerhalb des Menüs ✅
- Prüfe Browser Console auf JavaScript-Fehler

## 📄 Lizenz

Dieses Projekt ist als persönliches Portfolio entwickelt. Du kannst es als Template/Inspiration für dein eigenes Portfolio verwenden.

## 🤝 Kontakt

**Hasan Bayraktar**  
Full Stack Developer aus Österreich

- 📧 Email: [bayraktarhasan@outlook.de](mailto:bayraktarhasan@outlook.de)
- 💼 LinkedIn: [Hasan Bayraktar](https://at.linkedin.com/in/hasan-bayraktar-632a95154)
- 🐙 GitHub: [@bayraktarhasan](https://github.com/bayraktarhasan)
- 🌐 Website: [bayraktarhasan.github.io](https://bayraktarhasan.github.io)

## 🎉 Features im Detail

### Bilingual System
- Deutsch als Standardsprache
- Vollständige englische Übersetzung
- LocalStorage Persistenz für Sprachauswahl
- Automatische Übersetzung aller `data-de/data-en` Elemente
- Synchronisierte Language-Switcher (Desktop + Mobile)

### Responsive Design
- Mobile-First Approach
- Hamburger-Menü mit Slide-in Animation
- Language-Switcher neben Hamburger-Icon (Mobile)
- Optimiert für alle Bildschirmgrößen
- Touch-optimierte Buttons und Links

### Dark Mode
- Modernes dunkles Design als Standard
- Optimierte Farbpalette für Lesbarkeit
- CSS Variables für einfache Anpassung
- Keine Theme-Toggle (bewusst dark-only)

### Performance
- Keine externen Dependencies
- Vanilla JavaScript
- Optimierte CSS (Grid + Flexbox)
- Lazy Loading für Bilder
- Schnelle Ladezeiten

---

**Viel Erfolg mit deinem Portfolio! 🚀**

Entwickelt mit ❤️ in Österreich | 2025
