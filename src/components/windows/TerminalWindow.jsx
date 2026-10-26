import React, { useState } from 'react';
import { Terminal, Zap } from 'lucide-react';
import WindowFrame from '../common/WindowFrame';
import { projects } from '../../data/projects';

export default function TerminalWindow({ onClose, onMinimize, onHotReload }) {
  const [input, setInput] = useState('');
  const [lines, setLines] = useState([
    { type: 'accent', text: '⚡ FLUTTER ENGINE & DART VM [Version 3.24.0 / Dart 3.5.0]' },
    { type: 'muted', text: 'Rahul Rajput — Flutter Developer (3.8+ yrs, 9 Play Store & 8 App Store releases)' },
    { type: 'muted', text: 'Type "flutter doctor", "flutter run", or "help" to explore.' },
  ]);

  const run = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response = [];
    if (cmd === 'help') {
      response = [
        'flutter doctor  — Run Flutter environment diagnostics',
        'flutter pub get — Fetch Dart dependencies (riverpod, dio, stripe, etc.)',
        'flutter run     — Build and launch featured app simulator',
        'dash            — Summon Dash the Hummingbird for hot-reload',
        'about           — Overview of Rahul Rajput',
        'stack           — Core Flutter & mobile engineering toolkit',
        'projects        — List of shipped production apps',
        'experience      — Career history (Codiant & Imaginar)',
        'contact         — Email, phone, location & LinkedIn',
        'clear           — Clear terminal display'
      ];
    } else if (cmd === 'flutter doctor') {
      response = [
        '[✓] Flutter (Channel stable, 3.24.0, on macOS / Windows, locale en-US)',
        '[✓] Android toolchain - develop for Android devices (Android SDK version 34.0.0)',
        '[✓] Xcode - develop for iOS and macOS (Xcode 15.4)',
        '[✓] Chrome - develop for the web',
        '[✓] Android Studio & Antigravity IDE configured',
        '[✓] VS Code with Dart & Flutter extensions',
        '[✓] 9 Production Apps published on Google Play Store & 8 on Apple App Store',
        '[✓] Connected device (2 available)',
        '• No issues found! Ready to build production mobile apps.'
      ];
    } else if (cmd === 'flutter pub get') {
      response = [
        'Resolving dependencies...',
        '+ flutter_riverpod 2.5.1',
        '+ provider 6.1.2',
        '+ dio 5.4.3',
        '+ firebase_core 2.30.1',
        '+ firebase_auth 4.19.4',
        '+ cloud_firestore 4.17.2',
        '+ firebase_messaging 14.9.1',
        '+ flutter_stripe 10.1.1',
        '+ purchases_flutter (RevenueCat) 6.8.0',
        'Changed 9 dependencies! Everything is up to date.'
      ];
    } else if (cmd === 'flutter run') {
      if (onHotReload) onHotReload();
      response = [
        'Launching lib/main.dart on iOS Simulator / Android Pixel in debug mode...',
        'Running Gradle task "assembleDebug"...',
        '✓ Built build/app/outputs/flutter-apk/app-debug.apk',
        'Syncing files to device...',
        'Flutter run key commands:',
        '  r : Hot reload ⚡',
        '  R : Hot restart',
        'Application running at 60.0 FPS. Published on Google Play Store.'
      ];
    } else if (cmd === 'dash') {
      if (onHotReload) onHotReload();
      response = [
        '🐤 Dash the Hummingbird flutters by!',
        '⚡ Triggered instant hot-reload across all live widgets.',
        '"Delivered 9 apps on Google Play Store and 8 on Apple App Store with clean architecture!"'
      ];
    } else if (cmd === 'about') {
      response = [
        'Rahul Rajput — Flutter Developer (3.8+ years experience)',
        'Location: Korba, Chhattisgarh – 495447',
        'Delivered 9 apps published on Google Play Store & 8 on Apple App Store.',
        'Specializing in Flutter, Dart, Riverpod, Provider, REST APIs & Firebase.'
      ];
    } else if (cmd === 'experience') {
      response = [
        '1. Codiant — A YASH Technologies Company (Apr 2023 – Jun 2026)',
        '   Associate Software Engineer (Baurow, CalCounts Pro, HireGroww, Fitterloop, Glowpeer)',
        '2. Imaginar Technologies (May 2022 – Nov 2022)',
        '   Associate Software Engineer (FoodIngram App)'
      ];
    } else if (cmd === 'stack') {
      response = [
        'Languages: Flutter · Dart',
        'State Management: Provider · Riverpod · MVC · MVVM · Clean Architecture',
        'Backend & APIs: Firebase (Auth/Firestore/Messaging) · REST APIs · Dio · HTTP',
        'Payments: Stripe · In-App Purchase (IAP) · RevenueCat',
        'Tools: Android Studio · Antigravity · VS Code · Git · GitHub · Postman'
      ];
    } else if (cmd === 'projects') {
      response = projects.map((p) => `${p.number}  ${p.name.padEnd(16)} [${p.category}] — ${p.type}`);
    } else if (cmd === 'contact') {
      response = [
        'Name: Rahul Rajput',
        'Email: rahul77478@gmail.com',
        'Phone: +91 7000036929',
        'Location: Korba, Chhattisgarh – 495447',
        'LinkedIn: https://www.linkedin.com/in/rahul-rajput-155616188'
      ];
    } else if (cmd === 'clear') {
      setLines([]);
      setInput('');
      return;
    } else {
      response = [
        `flutter: command not found: "${cmd}"`,
        'Type "help" or "flutter doctor" for supported commands.'
      ];
    }

    setLines((prev) => [
      ...prev,
      { type: 'command', text: `rahul@flutter-dev:~$ ${cmd}` },
      ...response.map((text) => ({ type: text.startsWith('[✓]') ? 'success' : 'output', text }))
    ]);
    setInput('');
  };

  return (
    <WindowFrame
      title="Flutter Shell — zsh"
      badge="DART CLI"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div className="terminal-window">
        <div className="terminal-top">
          <Terminal size={14} />
          <span>rahul@flutter-dev ~</span>
          <span className="terminal-live">
            <Zap size={11} className="amber-zap" /> HOT RELOAD ENABLED
          </span>
        </div>

        <div className="terminal-output">
          {lines.map((l, i) => (
            <div className={`terminal-line ${l.type}`} key={i}>
              {l.text}
            </div>
          ))}
          <form onSubmit={run} className="terminal-form">
            <span>rahul@flutter-dev:~$</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              aria-label="Terminal command"
              placeholder='Try "flutter doctor" or "help"...'
            />
          </form>
        </div>
      </div>
    </WindowFrame>
  );
}
