export const helpDict = {
  default: {
    title: "Labdroid Companion",
    desc: "Bewege deine Maus über ein beliebiges Eingabefeld, einen Button oder eine Anzeige im Dashboard, um hier sofort ausführliche Praxistipps, die genaue Funktionsbeschreibung und die relevanten DIN- und ISO-Qualitätsvorgaben einzusehen.",
    tip: "Nutze den interaktiven Hilfemodus, um seltene Arbeitsschrittfolgen reibungslos wiederzuerlangen.",
    compliance:
      "Konformität: DIN EN ISO 9001 (Qualitätsmanagement & Benutzerführung)",
  },
  domainSelect: {
    title: "Laborprüf-Domain",
    desc: "Legt die fachliche Prüfdomäne für die physikalische Inspektion fest. Jede Domäne lädt unterschiedliche deterministische Grenzwerte im Backend: 'pcb' prüft Leiterplatten; 'wafer' prüft Reinraumpartikel; 'motor' prüft Rotationsgeräusche.",
    tip: "Achte darauf, die korrekte Domäne für dein Prüfobjekt zu wählen, da die Rule-Engine sonst Fehlalarme generiert.",
    compliance: "Normbezug: DIN EN ISO 9001 (Prozesslenkung im Labor)",
  },
  deviceInput: {
    title: "Prüfgeräte-ID (Device ID)",
    desc: "Die eindeutige Bezeichnung des verwendeten Messplatzes (z. B. 'lab-cam-01'). Wird in den Prüfberichten als unbestreitbarer Audit-Pfad hinterlegt, um Messungen exakt rückverfolgen zu können.",
    tip: "Wird dieses Feld leergelassen, trägt das System automatisch die ID der ersten aktiven Kamera oder des Mikrofons ein.",
    compliance:
      "Normbezug: DIN EN ISO/IEC 17025 (Rückverfolgbarkeit von Prüfergebnissen)",
  },
  textInput: {
    title: "Prüfauftrag & Prompt",
    desc: "Zusätzliche Textanweisung für die KI-Erklärschicht (z. B. 'Überprüfe, ob der Kondensator C13 vorhanden ist'). Die KI nutzt diesen Kontext, um das Ergebnis der physikalischen Tests genau in Bezug auf deine Frage zu deuten.",
    tip: "Gib kurze, präzise Formulierungen an, um schnelle und präzise Rückmeldungen der KI zu erhalten.",
    compliance:
      "Normbezug: DIN EN ISO 9241 (Ergonomie der Mensch-System-Interaktion)",
  },
  providerSelect: {
    title: "KI-Modell-Provider",
    desc: "Auswahl der Ausführungsschicht für die KI-Erklärung. 'litert' führt ultrakompakte Multimodal-Modelle lokal aus; 'ollama' nutzt lokale Servermodelle auf deiner GPU; 'openrouter' greift verschlüsselt auf Hochleistungs-Online-Modelle zu.",
    tip: "Für maximale Datenhoheit (Betriebsgeheimnisse) wähle 'ollama' oder 'litert' im Offline-Modus.",
    compliance:
      "Normbezug: ISO/IEC 27001 (Informationssicherheits-Managementsysteme)",
  },
  modelInput: {
    title: "Spezifischer Modellname",
    desc: "Erlaubt es, ein bestimmtes KI-Modell des ausgewählten Providers manuell anzusprechen (z. B. 'gemma:4e' oder 'llama3.1'). Bleibt das Feld leer, so greift das System auf das Standardmodell der aktiven Konfiguration zurück.",
    tip: "Achte beim lokalen Betrieb darauf, dass das Modell vorab per 'ollama pull' auf deinen Laborrechner geladen wurde.",
    compliance: "Normbezug: ISO/IEC 22989 (Künstliche Intelligenz · Konzepte)",
  },
  localSetupBtn: {
    title: "Lokale Labor-Konfiguration",
    desc: "Lädt mit einem Klick das vollständig geschlossene, lokale Labor-Setup. Setzt den Provider auf 'ollama' und das Standardmodell auf 'gemma4:e4b' – ideal für Offline-Messplätze ohne Internetverbindung.",
    tip: "Bestens geeignet, wenn dein Labor aus Datenschutzgründen keine Daten nach außen übertragen darf.",
    compliance:
      "Normbezug: DIN EN ISO 13485 (QM-Systeme für Medizinprodukte · Datensicherheit)",
  },
  onlineSetupBtn: {
    title: "Online-Cloud-Konfiguration",
    desc: "Konfiguriert das System für den REST-Betrieb über OpenRouter. Setzt den Provider auf 'openrouter' und erlaubt die Nutzung hochleistungsfähiger Cloud-Sprachmodelle.",
    tip: "Setzt voraus, dass der Administrator den OPENROUTER_API_KEY im Backend konfiguriert hat.",
    compliance:
      "Normbezug: ISO/IEC 27017 (Informationssicherheit für Cloud-Dienste)",
  },
  setProviderBtn: {
    title: "Provider-Konfiguration anwenden",
    desc: "Überträgt die aktuell im Formular gewählten Einstellungen (Provider und Modell) an das aktive Backend und schaltet die Erklärschicht zur Laufzeit um.",
    tip: "Das System meldet zurück, ob der Wechsel erfolgreich war oder greift im Fehlerfall auf den Fallback-Modus zurück.",
    compliance:
      "Normbezug: DIN 31051 (Instandhaltung und betriebliche Flexibilität)",
  },
  runJobBtn: {
    title: "Manueller Prüfstart (Job auslösen)",
    desc: "Startet die kombinierte Qualitätsprüfung. Es wird ein Snapshot des aktuellen Kamerabilds (ROI) und eine Tonspur erfasst, deterministisch geprüft und im Falle einer Modellantwort verständlich begründet.",
    tip: "Triggert die asynchrone Worker-Warteschlange im Backend, sodass der Client sofort weiterbedient werden kann.",
    compliance:
      "Normbezug: DIN EN ISO/IEC 17025 (Messungen und Qualitätsanalysen)",
  },
  cameraBtn: {
    title: "Visuelle Überwachungskamera aktivieren",
    desc: "Initiiert den Bilddatenstrom deiner ausgewählten Laborkamera. Ermöglicht die Echtzeit-Vorschau und die Definition des Messbereichs (ROI) für die automatische Bildanalyse.",
    tip: "Sollte das Bild flackern, prüfe die USB-Kabelverbindung zum Erfassungsrechner.",
    compliance:
      "Normbezug: ISO 12100 (Sicherheit von Maschinen · Visuelle Überwachung)",
  },
  captureBtn: {
    title: "Einzelbild-Festhaltung (Frame Capture)",
    desc: "Friert den aktuellen Bildausschnitt der Kamera ein und legt ihn im Zwischenspeicher ab, um ihn als visuelle Momentaufnahme für die nächste deterministische Prüfung vorzubereiten.",
    tip: "Du kannst den zu prüfenden Ausschnitt (Region of Interest, ROI) flexibel mit der Maus im Videostream aufziehen.",
    compliance:
      "Normbezug: DIN EN ISO 13485 (Bilddokumentation zur Beweisprüfung)",
  },
  brightness: {
    title: "Bild-Helligkeitskorrektur (Brightness)",
    desc: "Digitale Pegelkorrektur für das Kamerabild. Kompensiert suboptimale Ausleuchtungen im Laborbereich.",
    tip: "Stelle die Helligkeit so ein, dass Texturen und Konturen im Video scharf sichtbar werden, ohne zu überbelichten.",
    compliance: "Normbezug: ISO 8995-1 (Beleuchtung von Arbeitsstätten)",
  },
  contrast: {
    title: "Bildkontrast (Contrast)",
    desc: "Verstärkt oder schwächt den Helligkeitsunterschied zwischen hellen und dunklen Bereichen ab, um Texturen für den Kanten-Detektionsalgorithmus hervorzuheben.",
    tip: "Ein höherer Kontrast verbessert die Trefferquote des Kantendichte-Algorithmus (edge_density).",
    compliance:
      "Normbezug: DIN EN ISO 9241-303 (Anforderungen an visuelle Anzeigen)",
  },
  saturation: {
    title: "Farbsättigung (Saturation)",
    desc: "Reguliert die farbliche Intensität des Kamerabilds. Kann bis auf Graustufen abgesenkt werden, um störende Farbfehler bei reinen Strukturuntersuchungen zu eliminieren.",
    tip: "Bei metallischen Reflexionen kann ein leicht reduzierter Sättigungswert Konturfehler minimieren.",
    compliance: "Normbezug: ISO 13407 (Benutzerzentrierte Gestaltung)",
  },
  audioBtn: {
    title: "Akustischer Sensor (Mikrofon)",
    desc: "Aktiviert oder stoppt das ausgewählte Labor-Mikrofon, um Schalldruckpegel und Spektralanomalien rotierender Anlagenteile in Echtzeit zu erfassen.",
    tip: "Verwende ein Richtmikrofon, um akustische Nebengeräusche der Laborumgebung wirksam abzugrenzen.",
    compliance:
      "Normbezug: ISO 11201 (Akustik · Bestimmung von Geräuschemissions-Werten)",
  },
  audioViewMode: {
    title: "Spektral-Analyse-Modus",
    desc: "Umschaltung für den Audio-Echtzeit-Monitor. 'Spektrum' visualisiert Einzelfrequenzen; 'Wasserfall' zeigt die zeitliche Frequenzlage; 'Phase' stellt das Phasenverhältnis dar.",
    tip: "Verwende den 'Wasserfall'-Modus, um kurzzeitige Knackgeräusche oder Klickphänomene im zeitlichen Verlauf aufzudecken.",
    compliance:
      "Normbezug: DIN EN ISO 80000-8 (Größen und Einheiten · Akustik)",
  },
  recordBtn: {
    title: "Audioaufnahme-Intervall (5 Sekunden)",
    desc: "Zeichnet ein festes akustisches Intervall von exakt 5 Sekunden für die nachfolgende Spektralprüfung und Anomalieanalyse auf.",
    tip: "Die aufgezeichnete Tonspur (WAV-Format) wird im unlöschbaren Evidence-Ordner zwecks Audits revisionssicher abgelegt.",
    compliance:
      "Normbezug: DIN EN ISO 9001 (Prüfmittelüberwachung & Nachweiserbringung)",
  },
  gain: {
    title: "Mikrofon-Eingangsverstärkung (Gain)",
    desc: "Analoge bzw. digitale Vorverstärkung des akustischen Sensors, um leise Geräusche in den messbaren Dynamic-Range des Analysators zu überführen.",
    tip: "Verhindere ein Übersteuern (Level nahe 1.0), da Clipping den Frequenzgang verfälscht und Fehlalarme triggert.",
    compliance: "Normbezug: DIN IEC 60268 (Elektroakustische Geräte)",
  },
  threshold: {
    title: "Hands-Free Aktivierungsschwelle",
    desc: "Legt fest, ab welchem Schalldruckpegel (in dB) das System eine menschliche Spracheingabe oder ein lautes Prüfgeräusch detektieren soll. Dient im Parlor-Modus als Stille-/Sprachgrenze.",
    tip: "Bewege den Regler so weit nach rechts, dass normales Flüstern blockiert wird, aber klares Sprechen das Signal triggert.",
    compliance:
      "Normbezug: DIN EN ISO 7731 (Ergonomie - Gefahrensignale für öffentliche Bereiche)",
  },
  eqLow: {
    title: "Equalizer: Tiefe Frequenzen (Low EQ)",
    desc: "Filtert niederfrequente Störgeräusche wie Brummen von Klimaanlagen oder Pumpengeräusche (Hochpasswirkung).",
    tip: "Senke diesen Filter ab (Wert < 1.0), um störendes Netzbrummen bei Schwingungsprüfungen herauszufiltern.",
    compliance: "Normbezug: DIN 45630 (Akustische Messungen)",
  },
  eqMid: {
    title: "Equalizer: Mittlere Frequenzen (Mid EQ)",
    desc: "Reguliert den Frequenzbereich der menschlichen Sprache und vieler Maschinengeräusche im Kernspektrum.",
    tip: "Ein Wert um 1.0 erhält die authentische Stimmdynamik für die sprachbasierte Interaktion.",
    compliance: "Normbezug: DIN EN ISO 11202 (Geräuschemisssionsmessung)",
  },
  eqHigh: {
    title: "Equalizer: Hohe Frequenzen (High EQ)",
    desc: "Hebt oder senkt hochfrequente Anteile wie Zischen, Quietschen oder Reibungsphänomene im Oberspektrum.",
    tip: "Hebe die Höhen leicht an, wenn du feine metallische Schleifgeräusche aufdecken möchtest.",
    compliance:
      "Normbezug: DIN EN ISO 12100 (Geräuschminimierung an Maschinen)",
  },
  baselineGetBtn: {
    title: "Standard-Baseline abfragen",
    desc: "Ruft die historischen Mittelwerte und Toleranzbänder (Soll-Zustand) der gewählten Domäne aus der Datenbank ab.",
    tip: "Die Abweichung des Prüflings wird als statistischer Z-Score und Abweichung ('mean ± 2*std') ermittelt.",
    compliance: "Normbezug: DIN EN ISO 5725 (Genauigkeit von Messverfahren)",
  },
  baselineResetBtn: {
    title: "Baseline zurücksetzen",
    desc: "Verwirft die gesammelten Referenzwerte der Domäne und erlaubt es, ein neues Referenzmodell für die statistische Anomalieerkennung einzulernen.",
    tip: "Nur bei vollständiger Gewissheit betätigen, dass ein neuer fehlerfreier Standardzustand kalibriert werden soll.",
    compliance: "Normbezug: DIN EN ISO 10012 (Messmanagementsysteme)",
  },
  actuatorFireBtn: {
    title: "Auszulösende Aktorik-Zündung (Safe Actuator)",
    desc: "Sendet einen Steuerbefehl (z. B. Sortiersignal an Roboter oder Relais) an das Backend. Um Unfälle zu vermeiden, greift hier der SafetyLayer (Cooldowns, Simulation und Freigabe-Token).",
    tip: "Im reinen Simulationsmodus wird der Befehl nur an das Audit-Logbuch gesendet, ohne die Leitungen real zu schalten.",
    compliance:
      "Sicherheitsnorm: DIN EN ISO 13849 (Sicherheitsbezogene Teile von Steuerungen)",
  },
  pluginsReloadBtn: {
    title: "Erweiterungs-Plugins neu laden",
    desc: "Durchsucht den 'plugins/'-Ordner des Backends nach neuen oder modifizierten Python-Analyseskripten und bindet diese ohne Backend-Neustart direkt in die Live-Prozesskette ein.",
    tip: "Ermöglicht das unkomplizierte Nachrüsten firmenspezifischer Auswerte-Algorithmen im laufenden Laborbetrieb.",
    compliance:
      "Normbezug: ISO/IEC 25010 (Software-Qualität · Erweiterbarkeit)",
  },
  pluginsRunBtn: {
    title: "Plugins manuell ausführen",
    desc: "Führt alle geladenen Software-Erweiterungen mit den aktuellen Messwerten aus und liefert die spezifischen Kennzahlen zurück.",
    tip: "Nutze dies zur schnellen Fehlersuche in neu codierten Auswertemodulen.",
    compliance: "Normbezug: ISO/IEC/IEEE 29119 (Software-Testnorm)",
  },
  metricSelect: {
    title: "Dashboard-Messgrößenauswahl",
    desc: "Bestimmt, welche der deterministischen Messgrößen (z. B. Helligkeitsmittelwert 'brightness_mean', Kantendichte 'edge_density' oder Schallstärke 'audio_rms') im Statistik-Dashboard ausgewertet werden soll.",
    tip: "Diese drei Metriken werden streng physikalisch und ohne KI-Abweichungsrisiko berechnet.",
    compliance:
      "Normbezug: DIN 55350 (Begriffe der Qualitätssicherung und Statistik)",
  },
  refreshStatsBtn: {
    title: "Dashboard-Statistik neu berechnen",
    desc: "Triggert die Live-Auswertung aller historischen Berichte für die gewählte Metrik. BerechnetHistogramm-Stufen und Zeitreihenanalysen direkt aus den gespeicherten Berichtsdaten.",
    tip: "Das Backend sendet die Rohdaten als JSON-Arrays zurück, die im UI direkt in Canvas-Graphen übertragen werden.",
    compliance:
      "Normbezug: DIN ISO 3534 (Statistik · Wahrscheinlichkeitsrechnung)",
  },
  audioLevel: {
    title: "Live-Audiopegel (RMS)",
    desc: "Zeigt die energetische Gesamtleistung der Mikrofonaufzeichnung der letzten Millisekunden als quadratischen Mittelwert (RMS) zwischen 0.0 und 1.0.",
    tip: "Ermöglicht eine direkte Aussage über die Lautstärke der Proben- und Sensorumgebung.",
    compliance:
      "Normbezug: DIN EN 61672-1 (Elektroakustik · Schallpegelmesser)",
  },
  actuatorType: {
    title: "Aktor-Übermittlungsweg",
    desc: "Legt das Netzwerkprotokoll fest, über welches das Backend nach der Prüfung ein Signal auslösen soll. 'http' feuert Web-Hooks; 'mqtt' sendet strukturierte Publish-Kanaltelegramme an einen IoT-Broker.",
    tip: "Ideal zur Ansteuerung speicherprogrammierbarer Steuerungen (SPS) oder smarter Industrieleuchten.",
    compliance: "Normbezug: ISO/IEC 20922 (MQTT-Protokollstandard für das IoT)",
  },
  actuatorTarget: {
    title: "Aktor-Netzwerkaddresse",
    desc: "Die Ziel-URL für http (z. B. 'http://192.168.1.50/relais/1') oder der MQTT-Topic-Kanal (z. B. 'machine/sorter/reject'), an den der Schaltbefehl verschlüsselt gesendet werden soll.",
    tip: "Aus Sicherheitsgründen blockiert das Backend fremde HTTP-Hosts, es sei denn, sie wurden in der Allowlist hinterlegt.",
    compliance:
      "Sicherheitsnorm: IEC 62443 (IT-Sicherheit für industrielle Automatisierungssysteme)",
  },
  actuatorPayload: {
    title: "Aktorik-Schaltnetzlast (Payload)",
    desc: 'Das Datenpaket im strukturierten JSON-Format, welches an das Zielgerät gesendet wird (z. B. `{"command": "reject", "speed": 1.2}`).',
    tip: "Verwende hier standardisierte Befehlssätze deines Maschinenherstellers.",
    compliance:
      "Normbezug: ISO/IEC 19510 (Informations-Technologie · BPMN- & Datenfluss)",
  },
  auditLoadBtn: {
    title: "Aktorik-Sicherheitsaudit laden",
    desc: "Lädt die letzten aufgezeichneten Aktor-Zündungen und Sicherheitsereignisse aus dem revisionssicheren Systemprotokoll des Backends zwecks Rückverfolgung.",
    tip: "Jedes Ereignis enthält Zeitstempel, Payload, Blockadegründe (z.B. Cooldown-Sperre) und den Token-Status.",
    compliance:
      "Normbezug: DIN EN ISO 9001 (Audit-Trail und nachvollziehbare Prozesslenkung)",
  },
  helpModeToggle: {
    title: "Interaktiver Hilfemodus (Labdroid Assistant)",
    desc: "Aktiviert das geführte laborinterne Hilfe-Center. Sämtliche Steuerelemente erhalten interaktive Info-Symbole und werden bei Mouseover in der Sidebar ausführlich erklärt.",
    tip: "Schalte den Modus ein, wenn du dich vergewissern möchtest, dass deine Einstellungen den DIN/ISO-Richtlinien entsprechen.",
    compliance:
      "Normbezug: DIN EN ISO 9241-110 (Grundsätze der Dialoggestaltung)",
  },
  chatHistory: {
    title: "KI-Unterhaltungsverlauf",
    desc: "Das chronologische Prüfprotokoll aller Labor-Interaktionen. Hier werden gesendete Prompt-Fragen, automatische Hands-Free-Sprachbefehle und die generierten KI-Analysen sauber nacheinander gelistet.",
    tip: "Nutze den Verlauf als Dokumentationsbasis, um frühere Testergebnisse sofort einzusehen, ohne Rohtext analysieren zu müssen.",
    compliance:
      "Normbezug: DIN EN ISO 9001 (Nachvollzierbare Dialogführung & Qualitätskontrolle)",
  },
  clearChatBtn: {
    title: "Gesprächsverlauf leeren",
    desc: "Setzt den aktuellen Gesprächsverlauf im Interface zurück und leert das Chatverlaufspanel für eine neue Labor-Testserie.",
    tip: "Leere den Verlauf vor dem Beginn einer neuen Platinen- oder Motivgruppe, um die Chronologie sauber zu trennen.",
    compliance: "Normbezug: DIN EN ISO 9001 (Lenkung von Qualitätsdokumenten)",
  },
  exportResultBtn: {
    title: "Analyse-JSON exportieren",
    desc: "Ermöglicht den direkten clientseitigen Download der physikalischen Messergebnisse und KI-Bewertungen als standardkonforme JSON-Datei.",
    tip: "Du kannst das JSON im Live Job-Result Feld zuvor nach deinen Wünschen modifizieren, um Labels oder Anomalien kunden- oder testfallspezifisch zu adjustieren.",
    compliance:
      "Normbezug: DIN EN ISO/IEC 17025 (Datenintegrität & Exportierbarkeit physikalischer Berichte)",
  },
};
