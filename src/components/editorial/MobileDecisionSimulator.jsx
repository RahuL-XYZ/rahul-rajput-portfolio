import React, { useState } from 'react';
import { Wifi, WifiOff, AlertTriangle, CheckCircle2, ShieldCheck, Smartphone, Layers, RefreshCw } from 'lucide-react';
import FlutterLogo from '../common/FlutterLogo';

export default function MobileDecisionSimulator() {
  // Decision states: false = default/fragile, true = production/robust
  const [offlineSync, setOfflineSync] = useState(true);
  const [cleanArch, setCleanArch] = useState(true);
  const [nativeStripe, setNativeStripe] = useState(true);

  // Compute verdict
  const getVerdict = () => {
    if (!offlineSync) {
      return {
        fail: true,
        title: 'User uninstalls on the metro.',
        reason: 'Network dropped on flaky 2G. Without local Hive/SQLite caching, the app threw an unhandled SocketException and wiped the user’s booking.'
      };
    }
    if (!cleanArch) {
      return {
        fail: true,
        title: 'App drops frames and locks up.',
        reason: 'Relying on setState() across deeply nested widgets caused full-tree rebuilds, leaking memory and submitting duplicate rental requests.'
      };
    }
    if (!nativeStripe) {
      return {
        fail: true,
        title: 'Payment fails at 3D Secure step.',
        reason: 'Embedding payment in a fragile webview broke bank SMS autofill and Apple Pay biometrics. 64% of users abandon at checkout.'
      };
    }
    return {
      fail: false,
      title: 'Sub-second checkout. Shipped to both stores.',
      reason: 'Riverpod keeps state predictable, SQLite caches changes offline, and native Stripe handles 3D Secure in under 90ms. 9 Play Store & 8 App Store releases built this way.'
    };
  };

  const verdict = getVerdict();

  return (
    <div className="sim-container">
      <div className="sim-controls">
        <div className="sim-intro">
          <p className="sim-kicker">INTERACTIVE BENCHMARK</p>
          <h3 className="sim-title">Three engineering choices decide if your mobile app survives.</h3>
          <p className="sim-dek">
            Most teams only think about UI pixels. How state, networks, and payments are architected under the hood determines whether an app gets 5 stars or gets uninstalled in week one.
          </p>
        </div>

        {/* Decision 1: Offline Sync */}
        <div className="sim-decision">
          <div className="sim-label-row">
            <span className="sim-num">01</span>
            <span className="sim-name">Network Handling</span>
          </div>
          <div className="sim-switch-group">
            <button
              type="button"
              className={`sim-switch-btn ${!offlineSync ? 'active-fail' : ''}`}
              onClick={() => setOfflineSync(false)}
            >
              Crash on 2G disconnect
            </button>
            <button
              type="button"
              className={`sim-switch-btn ${offlineSync ? 'active-pass' : ''}`}
              onClick={() => setOfflineSync(true)}
            >
              Offline Hive / SQLite Sync
            </button>
          </div>
        </div>

        {/* Decision 2: State Management */}
        <div className="sim-decision">
          <div className="sim-label-row">
            <span className="sim-num">02</span>
            <span className="sim-name">Architecture & State</span>
          </div>
          <div className="sim-switch-group">
            <button
              type="button"
              className={`sim-switch-btn ${!cleanArch ? 'active-fail' : ''}`}
              onClick={() => setCleanArch(false)}
            >
              setState() Spaghetti
            </button>
            <button
              type="button"
              className={`sim-switch-btn ${cleanArch ? 'active-pass' : ''}`}
              onClick={() => setCleanArch(true)}
            >
              Riverpod + Clean Arch
            </button>
          </div>
        </div>

        {/* Decision 3: Payments */}
        <div className="sim-decision">
          <div className="sim-label-row">
            <span className="sim-num">03</span>
            <span className="sim-name">Checkout & Payments</span>
          </div>
          <div className="sim-switch-group">
            <button
              type="button"
              className={`sim-switch-btn ${!nativeStripe ? 'active-fail' : ''}`}
              onClick={() => setNativeStripe(false)}
            >
              Fragile External WebView
            </button>
            <button
              type="button"
              className={`sim-switch-btn ${nativeStripe ? 'active-pass' : ''}`}
              onClick={() => setNativeStripe(true)}
            >
              Native Stripe Sheet
            </button>
          </div>
        </div>

        {/* Verdict Box */}
        <div className={`sim-verdict ${verdict.fail ? 'is-fail' : 'is-pass'}`}>
          <div className="verdict-head">
            {verdict.fail ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
            <h4>{verdict.title}</h4>
          </div>
          <p>{verdict.reason}</p>
        </div>
      </div>

      {/* Simulated Phone Screen */}
      <div className="sim-device-column">
        <div className="sim-phone">
          {/* Top Notch & Status */}
          <div className="sim-phone-header">
            <span className="sim-time">9:41</span>
            <div className="sim-phone-notch" />
            <div className="sim-phone-signals">
              {offlineSync ? <Wifi size={12} /> : <WifiOff size={12} className="text-red" />}
              <span>{offlineSync ? '5G' : '2G Flaky'}</span>
            </div>
          </div>

          {/* App Body Preview */}
          <div className="sim-screen-body">
            <div className="sim-app-bar">
              <FlutterLogo size={14} />
              <span>Baurow Rental Checkout</span>
            </div>

            <div className="sim-cart-card">
              <div className="sim-item-row">
                <div>
                  <strong>Sony Alpha A7 IV Kit</strong>
                  <small>3-day peer rental · Verified owner</small>
                </div>
                <span className="sim-price">₹4,200</span>
              </div>
            </div>

            {/* Simulated Live Diagnostic State */}
            <div className="sim-live-status">
              {!offlineSync ? (
                <div className="diag-box error">
                  <AlertTriangle size={14} />
                  <div>
                    <strong>SocketException: OS Error 101</strong>
                    <p>Network unreachable. Booking lost.</p>
                  </div>
                </div>
              ) : !cleanArch ? (
                <div className="diag-box warning">
                  <RefreshCw size={14} className="spin" />
                  <div>
                    <strong>Dropped 42 frames (Jank)</strong>
                    <p>Unnecessary rebuild: 120 widgets re-rendered.</p>
                  </div>
                </div>
              ) : !nativeStripe ? (
                <div className="diag-box warning">
                  <AlertTriangle size={14} />
                  <div>
                    <strong>WebView session expired</strong>
                    <p>3D Secure redirect timed out.</p>
                  </div>
                </div>
              ) : (
                <div className="diag-box success">
                  <ShieldCheck size={14} />
                  <div>
                    <strong>Clean Architecture · Riverpod</strong>
                    <p>Offline cache warm · Stripe Sheet mounted</p>
                  </div>
                </div>
              )}
            </div>

            <div className="sim-btn-wrap">
              <button
                type="button"
                className={`sim-action-btn ${verdict.fail ? 'btn-danger' : 'btn-success'}`}
              >
                {verdict.fail ? 'Retry Booking' : 'Confirm & Pay ₹4,200 (Stripe)'}
              </button>
            </div>
          </div>

          <div className="sim-phone-bottom-bar" />
        </div>
      </div>
    </div>
  );
}
