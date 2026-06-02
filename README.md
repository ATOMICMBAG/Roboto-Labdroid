# 🤖 Roboto Labdroid

[![Python Version](https://img.shields.io/badge/Python-3.11%2B-blue.svg)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100%2B-009688.svg)](https://fastapi.tiangolo.com/)
[![Web Audio API](https://img.shields.io/badge/Web_Audio_API-Supported-orange.svg)](https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API)
[![Compliance Status](https://img.shields.io/badge/DIN_EN_ISO-9001_&_17025-purple.svg)](#-isodin-konformität--qualitätssicherung)

> **Roboto Labdroid** ist eine hochmoderne, multimodale Sicherheits- und Qualitätsprüfungs-Matrix für Labore und industrielle Testumgebungen. Sie vereint deterministische Messungen (Bild- und Spektralanalysen) mit einer intelligenteren, sprachsynthetisierten KI-Erklärschicht (LLM) und einer revolutionär benutzerfreundlichen, freihändigen Sprachsteuerung (**Parlor-Modus**).

---

## 📌 Übersicht & Screenshots

Hier entsteht nach dem ersten Live-Lauf Platz für visuelle Eindrücke deines Systems:

```text
+---------------------------------------------------------------------------------+
|                                Roboto Labdroid                                  |
|   [O] Hilfe-Modus (Aktiv)                     [O] Parlor-Modus (VAD & TTS)      |
+---------------------------------------------------------------------------------+
|  1) Job & Provider               |  2) Kamera & Video-Filter                    |
|  +-----------------------------+ |  +----------------------------------------+  |
|  | Domain: [PCB  ]             | |  | [ Kamera starten ] [ Frame übernehmen ]|  |
|  | Device: [lab-cam-01]        | |  |                                        |  |
|  |                             | |  |          [ Live-Video ROI ]            |  |
|  | Prompt: C13 prüfen...       | |  |                                        |  |
|  | [Job starten]               | |  | Brightness [=========] 100%            |  |
|  +-----------------------------+ |  +----------------------------------------+  |
+---------------------------------------------------------------------------------+
|                              🤖 LABDROID ASSISTANT (Sidebar)                     |
|  -> Laborprüf-Domain (ISO 9001): Legt die deterministischen Grenzwerte fest...    |
+---------------------------------------------------------------------------------+
```

> 💡 _Tipp für GitHub-Besucher: Sobald du eigene Bildschirmfotos angefertigt hast, lege sie einfach in ein Verzeichnis namens `screenshots/` ab und verlinke sie hier:_
> `![Roboto Labdroid Dashboard](screenshots/dashboard.png)`

---

## ✨ Die Besonderheiten von Roboto Labdroid

### 💬 1. Parlor-Modus (Audio-Visuelle Echtzeit-Konversation)

Inspiriert vom _Parlor_-Projekt (https://github.com/fikrikarim/parlor), ermöglicht Roboto Labdroid eine völlig berührungslose (Hands-Free) Steuerung direkt am Messplatz:

- **Sprachaktivitätserkennung (VAD):** Über die Web Audio API lauscht das System auf die Stimme des Laboranten. Überschreitet das Signal den Schwellenwert (Threshold), wird die Aufzeichnung erfasst.
- **Intelligente Stille-Erkennung:** Sobald du aufhörst zu sprechen (1,2 Sekunden Ststille), löst die App **automatisch** ein hochauflösendes Frame-Capture aus und übermittelt Bild, Audiopegel und Kontext an das Backend-Prüfsystem.
- **Sprechender Assistent (TTS):** Das Resultat wird vom Browser flüssig auf Deutsch vorgelesen. Ideal für Reinräume oder Arbeiten mit Schutzhandschuhen!

### ℹ️ 2. Interaktiver Hilfe-Modus («Labdroid Companion»)

Nie wieder Hilflosigkeit bei seltener Benutzung!

- Aktiviere den **Hilfe-Modus** oben rechts, und eine dynamische Sidebar gleitet ins Bild.
- Überall im Interface erscheinen interaktive **Fragezeichen-Badges (?)**.
- **Mouseover-Erklärungen:** Fahre einfach mit der Maus über ein beliebiges Eingabefeld, Regler oder Diagramm. Die Sidebar schwenkt in Echtzeit um und zeigt dir:
  1. Den genauen **Zweck** des Feldes.
  2. Einen wertvollen **Praxistipp** für deinen Labor-Alltag.
  3. Die zugehörige **DIN/ISO-Norm**, die diesen Arbeitsschritt reguliert.

### 🛡️ 3. ISO/DIN-Konformität & Qualitätssicherung

Roboto Labdroid trennt streng zwischen deterministischer (physikalischer) Messung und generativer Interpretation:

- **Qualitätsvorgabe nach DIN EN ISO/IEC 17025:** Nur absolut unbestreitbare physikalische Parameter (Kantendichte `edge_density`, Helligkeitswerte `brightness_mean`, Audio-RMS) entscheiden über **OK** oder **NOK**.
- **Audit-Sicherheit:** Jede Messung wird im revisionsgeschützten Berichtsordner samt unmodifizierbarem Beweisbild (Evidence) hinterlegt.
- **Aktorik-Eigensicherheit (DIN EN ISO 13849):** Relais oder Aussortierbefehle (HTTP/MQTT) können über einen SafetyLayer abgespeichert, simuliert, mit Token autorisiert und mit Cooldown-Sperren versehen werden.

---

## 🛠️ Systemarchitektur

Das System besteht aus zwei eigenständigen, perfekt kooperierenden Komponenten:

```text
                  +--------------------------------+
                  |    HTML5 / Vanilla JS Client   |
                  |  - Web Audio API (EQ, VAD)     |
                  |  - WebRTC Video Stream         |
                  |  - Labdroid Companion Sidebar  |
                  +--------------------------------+
                                  |
                        HTTP / WebSocket (JSON)
                                  |
                  +--------------------------------+
                  |        FastAPI-Backend         |
                  |  - Async Inspection Queue      |
                  |  - Rule-Engine (Deterministisch)|
                  |  - LLM-Erklärschicht           |
                  +--------------------------------+
```

---

## 🚀 Schnellanleitung zur Inbetriebnahme

### Schritt 1: Backend einrichten & Preflight-Check

Wechsle in das Verzeichnis `./backend` und installiere die Abhängigkeiten (bevorzugt mit `uv` oder `pip`):

```bash
cd backend
uv sync
```

Führe das mitgelieferte Preflight-Diagnosewerkzeug aus, um deine lokale Installation und Verbindungen (wie lokale LLMs oder Cloud-Anbindungen) zu prüfen:

```bash
python setup_companion.py status --profile auto
```

### Schritt 2: Environment-Konfiguration generieren

Der Setup-Assistent generiert dir passgenaue Profile (.env) zur sofortigen Verwendung:

- **Lokaler Betrieb (Datenschutzkonform mit Ollama):**

  ```bash
  python setup_companion.py write-env --profile local --output .env.local
  ```

  _(Erfordert Ollama im Hintergrund, z.B. geladen mit `ollama pull gemma4:e4b`)_

- **Online Betrieb (Hochleistung mit OpenRouter Cloud):**
  ```bash
  python setup_companion.py write-env --profile online --output .env.online
  ```

### Schritt 3: Server starten

Nutze das generierte Profil, um das Backend zu starten:

```bash
python -m uvicorn app.main:app --app-dir . --host 0.0.0.0 --port 8000 --env-file .env.local
```

Das Backend ist nun unter `http://localhost:8000` erreichbar.

### Schritt 4: Frontend aufrufen

Da für Kamera- und Audio-Feeds (Web Audio API) CORS- und Berechtigungsrichtlinien der modernen Browser gelten, wird für die lokale Ausführung ein kleiner lokaler HTTP-Server wärmstens empfohlen:

```bash
cd ../frontend
python -m http.server 5500
```

Öffne nun dein Interface unter `http://localhost:5500` im Browser und starte deine erste geführte Inspektion!

---

## 📂 Deep Dive: Projekt-Dokumentationen

Für detaillierte Entwicklungs- und Fachinformationen der einzelnen Schichten klicke auf die folgenden Verweise:

<details>
<summary>📦 Backend Deep Dive (Klicke zum Ausklappen)</summary>

### Architektur des Backends

- **`app/api/`**: REST & WebSocket-Endpoints für flüssiges Ingestion in Echtzeit.
- **`app/pipeline/`**: Deterministische Auswertung der Bild- und Audiosignale getrennt von KI-Anfälligkeiten.
- **`app/providers/`**: Runtime-Umschaltung zwischen LiteRT (lokale Mikro-Modelle), Ollama (GPU-Betrieb) und OpenRouter (Cloud-Modelle).
- **`app/processing/`**: Asynchrone Job-Wartereihe mit Timeout Schutz.

_Detaillierte Informationen findest du direkt im [Backend README](./backend/README.md)._

</details>

<details>
<summary>🎨 Frontend Deep Dive (Klicke zum Ausklappen)</summary>

### Architektur des Frontends

- **`index.html`**: Das übersichtliche Dashboard (Accordion-basiert für optimale Übersicht).
- **`src/app.js`**: Der zentrale Koordinator, der Web Audio, WebRTC und WebSocket-Verbindungen steuert und den interaktiven Hilfemodus über das Glossar veredelt.
- **`src/audio-chain.js`**: Spektrographen, Wasserfall- und Phasenanalyse direkt im Client unter Einbindung von Gain, 3-Band Equalizer und Dynamikkompression.
- **`src/help.js`**: Das DIN/ISO-konforme Wörterbuch des Labors für den Mouseover-Companion.

_Detaillierte Informationen findest du direkt im [Frontend README](./frontend/README.md)._

</details>

---

## 🛡️ ISO/DIN-Konformität & Qualitätssicherung

Dieses System wurde konzeptionell so entwickelt, dass es sich nahtlos in einen zertifizierten Laborverbund einfügt:

1. **DIN EN ISO 9001 (Qualitätsmanagement):** Strukturierte Fehler- und Erfolgsrückverfolgung über automatisierte Replays (`/replay`).
2. **DIN EN ISO/IEC 17025 (Prüflabore):** Eindeutige Trace-ID pro Inspektion zur unanfechtbaren Revisionssicherheit aller ermittelten Messwerte.
3. **DIN EN ISO 9241 (Ergonomie):** Fehlerminimierung durch den integrierten und permanent abrufbaren interaktiven Hilfe-Assistenten am Arbeitsplatz.

---

## 📄 Lizenz

Dieses Projekt ist für den internen Einsatz und die freie Veröffentlichung zur Weiterentwicklung lizenziert. Weitere Details findest du im Hauptverzeichnis.
