// src/Icon.tsx
import React from "react";
import { useLottie } from "lottie-react";

// src/registry.ts
var registry = {
  "23": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/23.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: 23");
    return r.json();
  }),
  "24-support": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/24-support.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: 24-support");
    return r.json();
  }),
  "24": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/24.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: 24");
    return r.json();
  }),
  "25": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/25.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: 25");
    return r.json();
  }),
  "26": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/26.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: 26");
    return r.json();
  }),
  "27": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/27.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: 27");
    return r.json();
  }),
  "3d-cube-scan": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/3d-cube-scan.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: 3d-cube-scan");
    return r.json();
  }),
  "3d-rotate": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/3d-rotate.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: 3d-rotate");
    return r.json();
  }),
  "3d-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/3d-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: 3d-square");
    return r.json();
  }),
  "3dcube": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/3dcube.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: 3dcube");
    return r.json();
  }),
  "3square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/3square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: 3square");
    return r.json();
  }),
  "Property 1=linear, Property 2=math": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/Property 1=linear, Property 2=math.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: Property 1=linear, Property 2=math");
    return r.json();
  }),
  "aave-(aave)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/aave-(aave).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: aave-(aave)");
    return r.json();
  }),
  "activity": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/activity.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: activity");
    return r.json();
  }),
  "add-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/add-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: add-circle");
    return r.json();
  }),
  "add-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/add-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: add-square");
    return r.json();
  }),
  "add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: add");
    return r.json();
  }),
  "additem": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/additem.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: additem");
    return r.json();
  }),
  "airdrop": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/airdrop.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: airdrop");
    return r.json();
  }),
  "airplane-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/airplane-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: airplane-square");
    return r.json();
  }),
  "airplane": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/airplane.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: airplane");
    return r.json();
  }),
  "airpod": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/airpod.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: airpod");
    return r.json();
  }),
  "airpods": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/airpods.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: airpods");
    return r.json();
  }),
  "alarm": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/alarm.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: alarm");
    return r.json();
  }),
  "align-bottom": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/align-bottom.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: align-bottom");
    return r.json();
  }),
  "align-horizontally": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/align-horizontally.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: align-horizontally");
    return r.json();
  }),
  "align-left": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/align-left.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: align-left");
    return r.json();
  }),
  "align-right": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/align-right.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: align-right");
    return r.json();
  }),
  "align-top-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/align-top-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: align-top-2");
    return r.json();
  }),
  "align-vertically": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/align-vertically.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: align-vertically");
    return r.json();
  }),
  "android": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/android.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: android");
    return r.json();
  }),
  "ankr-(ankr)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ankr-(ankr).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ankr-(ankr)");
    return r.json();
  }),
  "apple": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/apple.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: apple");
    return r.json();
  }),
  "aquarius": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/aquarius.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: aquarius");
    return r.json();
  }),
  "archive-book": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/archive-book.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: archive-book");
    return r.json();
  }),
  "archive": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/archive.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: archive");
    return r.json();
  }),
  "arrange-circle-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrange-circle-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrange-circle-2");
    return r.json();
  }),
  "arrange-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrange-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrange-circle");
    return r.json();
  }),
  "arrange-square-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrange-square-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrange-square-2");
    return r.json();
  }),
  "arrange-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrange-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrange-square");
    return r.json();
  }),
  "arrow-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-2");
    return r.json();
  }),
  "arrow-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-3");
    return r.json();
  }),
  "arrow-circle-down": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-circle-down.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-circle-down");
    return r.json();
  }),
  "arrow-circle-left": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-circle-left.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-circle-left");
    return r.json();
  }),
  "arrow-circle-right": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-circle-right.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-circle-right");
    return r.json();
  }),
  "arrow-circle-up": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-circle-up.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-circle-up");
    return r.json();
  }),
  "arrow-down": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-down.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-down");
    return r.json();
  }),
  "arrow-down2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-down2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-down2");
    return r.json();
  }),
  "arrow-down3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-down3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-down3");
    return r.json();
  }),
  "arrow-down4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-down4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-down4");
    return r.json();
  }),
  "arrow-left": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-left.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-left");
    return r.json();
  }),
  "arrow-left2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-left2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-left2");
    return r.json();
  }),
  "arrow-left3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-left3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-left3");
    return r.json();
  }),
  "arrow-left4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-left4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-left4");
    return r.json();
  }),
  "arrow-right": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-right.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-right");
    return r.json();
  }),
  "arrow-right2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-right2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-right2");
    return r.json();
  }),
  "arrow-right3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-right3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-right3");
    return r.json();
  }),
  "arrow-right4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-right4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-right4");
    return r.json();
  }),
  "arrow-square-down": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-square-down.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-square-down");
    return r.json();
  }),
  "arrow-square-left": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-square-left.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-square-left");
    return r.json();
  }),
  "arrow-square-right": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-square-right.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-square-right");
    return r.json();
  }),
  "arrow-square-up": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-square-up.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-square-up");
    return r.json();
  }),
  "arrow-swap-horizontal": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-swap-horizontal.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-swap-horizontal");
    return r.json();
  }),
  "arrow-swap-vertical": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-swap-vertical.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-swap-vertical");
    return r.json();
  }),
  "arrow-up": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-up.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-up");
    return r.json();
  }),
  "arrow-up2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-up2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-up2");
    return r.json();
  }),
  "arrow-up3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-up3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-up3");
    return r.json();
  }),
  "arrow-up4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/arrow-up4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: arrow-up4");
    return r.json();
  }),
  "attach-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/attach-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: attach-circle");
    return r.json();
  }),
  "attach-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/attach-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: attach-square");
    return r.json();
  }),
  "audio-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/audio-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: audio-square");
    return r.json();
  }),
  "augur-(rep)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/augur-(rep).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: augur-(rep)");
    return r.json();
  }),
  "autobrightness": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/autobrightness.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: autobrightness");
    return r.json();
  }),
  "autonio-(niox)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/autonio-(niox).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: autonio-(niox)");
    return r.json();
  }),
  "avalanche-(avax)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/avalanche-(avax).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: avalanche-(avax)");
    return r.json();
  }),
  "award": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/award.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: award");
    return r.json();
  }),
  "back-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/back-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: back-square");
    return r.json();
  }),
  "backward-10-seconds": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/backward-10-seconds.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: backward-10-seconds");
    return r.json();
  }),
  "backward-15-seconds": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/backward-15-seconds.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: backward-15-seconds");
    return r.json();
  }),
  "backward-5-seconds": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/backward-5-seconds.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: backward-5-seconds");
    return r.json();
  }),
  "backward-item": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/backward-item.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: backward-item");
    return r.json();
  }),
  "backward": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/backward.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: backward");
    return r.json();
  }),
  "bag-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bag-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bag-2");
    return r.json();
  }),
  "bag-cross-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bag-cross-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bag-cross-2");
    return r.json();
  }),
  "bag-cross": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bag-cross.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bag-cross");
    return r.json();
  }),
  "bag-happy": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bag-happy.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bag-happy");
    return r.json();
  }),
  "bag-tick-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bag-tick-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bag-tick-2");
    return r.json();
  }),
  "bag-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bag-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bag-tick");
    return r.json();
  }),
  "bag-timer": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bag-timer.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bag-timer");
    return r.json();
  }),
  "bag": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bag.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bag");
    return r.json();
  }),
  "bank": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bank.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bank");
    return r.json();
  }),
  "barcode": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/barcode.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: barcode");
    return r.json();
  }),
  "battery-23full": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/battery-23full.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: battery-23full");
    return r.json();
  }),
  "battery-charging": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/battery-charging.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: battery-charging");
    return r.json();
  }),
  "battery-disable": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/battery-disable.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: battery-disable");
    return r.json();
  }),
  "battery-empty-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/battery-empty-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: battery-empty-2");
    return r.json();
  }),
  "battery-empty": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/battery-empty.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: battery-empty");
    return r.json();
  }),
  "battery-full": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/battery-full.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: battery-full");
    return r.json();
  }),
  "be": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/be.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: be");
    return r.json();
  }),
  "bezier": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bezier.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bezier");
    return r.json();
  }),
  "bill": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bill.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bill");
    return r.json();
  }),
  "binance-coin-(bnb)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/binance-coin-(bnb).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: binance-coin-(bnb)");
    return r.json();
  }),
  "binance-usd-(busd)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/binance-usd-(busd).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: binance-usd-(busd)");
    return r.json();
  }),
  "bitcoin-(btc)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bitcoin-(btc).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bitcoin-(btc)");
    return r.json();
  }),
  "bitcoin-card": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bitcoin-card.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bitcoin-card");
    return r.json();
  }),
  "bitcoin-convert": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bitcoin-convert.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bitcoin-convert");
    return r.json();
  }),
  "bitcoin-refresh": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bitcoin-refresh.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bitcoin-refresh");
    return r.json();
  }),
  "blend-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/blend-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: blend-2");
    return r.json();
  }),
  "blend": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/blend.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: blend");
    return r.json();
  }),
  "blogger": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/blogger.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: blogger");
    return r.json();
  }),
  "bluetooth-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bluetooth-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bluetooth-2");
    return r.json();
  }),
  "bluetooth-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bluetooth-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bluetooth-circle");
    return r.json();
  }),
  "bluetooth-rectangle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bluetooth-rectangle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bluetooth-rectangle");
    return r.json();
  }),
  "bluetooth": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bluetooth.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bluetooth");
    return r.json();
  }),
  "blur": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/blur.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: blur");
    return r.json();
  }),
  "book-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/book-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: book-2");
    return r.json();
  }),
  "book": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/book.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: book");
    return r.json();
  }),
  "bookmark-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bookmark-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bookmark-2");
    return r.json();
  }),
  "bookmark": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bookmark.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bookmark");
    return r.json();
  }),
  "bootstrap": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bootstrap.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bootstrap");
    return r.json();
  }),
  "box-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/box-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: box-2");
    return r.json();
  }),
  "box-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/box-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: box-add");
    return r.json();
  }),
  "box-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/box-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: box-remove");
    return r.json();
  }),
  "box-search": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/box-search.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: box-search");
    return r.json();
  }),
  "box-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/box-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: box-tick");
    return r.json();
  }),
  "box-time": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/box-time.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: box-time");
    return r.json();
  }),
  "box": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/box.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: box");
    return r.json();
  }),
  "briefcase": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/briefcase.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: briefcase");
    return r.json();
  }),
  "brifecase-cross": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/brifecase-cross.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: brifecase-cross");
    return r.json();
  }),
  "brifecase-timer": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/brifecase-timer.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: brifecase-timer");
    return r.json();
  }),
  "broom": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/broom.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: broom");
    return r.json();
  }),
  "brush-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/brush-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: brush-2");
    return r.json();
  }),
  "brush-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/brush-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: brush-3");
    return r.json();
  }),
  "brush-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/brush-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: brush-4");
    return r.json();
  }),
  "brush": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/brush.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: brush");
    return r.json();
  }),
  "bubble": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bubble.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bubble");
    return r.json();
  }),
  "bucket-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bucket-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bucket-circle");
    return r.json();
  }),
  "bucket-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bucket-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bucket-square");
    return r.json();
  }),
  "building-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/building-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: building-3");
    return r.json();
  }),
  "building-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/building-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: building-4");
    return r.json();
  }),
  "building": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/building.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: building");
    return r.json();
  }),
  "buildings-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/buildings-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: buildings-2");
    return r.json();
  }),
  "buildings": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/buildings.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: buildings");
    return r.json();
  }),
  "bus": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/bus.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: bus");
    return r.json();
  }),
  "buy-crypto": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/buy-crypto.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: buy-crypto");
    return r.json();
  }),
  "cake": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cake.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cake");
    return r.json();
  }),
  "calculator": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/calculator.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: calculator");
    return r.json();
  }),
  "calendar-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/calendar-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: calendar-2");
    return r.json();
  }),
  "calendar-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/calendar-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: calendar-3");
    return r.json();
  }),
  "calendar-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/calendar-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: calendar-add");
    return r.json();
  }),
  "calendar-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/calendar-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: calendar-circle");
    return r.json();
  }),
  "calendar-edit": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/calendar-edit.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: calendar-edit");
    return r.json();
  }),
  "calendar-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/calendar-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: calendar-remove");
    return r.json();
  }),
  "calendar-search": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/calendar-search.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: calendar-search");
    return r.json();
  }),
  "calendar-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/calendar-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: calendar-tick");
    return r.json();
  }),
  "calendar": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/calendar.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: calendar");
    return r.json();
  }),
  "call-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/call-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: call-add");
    return r.json();
  }),
  "call-calling": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/call-calling.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: call-calling");
    return r.json();
  }),
  "call-incoming": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/call-incoming.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: call-incoming");
    return r.json();
  }),
  "call-minus": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/call-minus.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: call-minus");
    return r.json();
  }),
  "call-outgoing": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/call-outgoing.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: call-outgoing");
    return r.json();
  }),
  "call-received": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/call-received.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: call-received");
    return r.json();
  }),
  "call-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/call-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: call-remove");
    return r.json();
  }),
  "call-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/call-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: call-slash");
    return r.json();
  }),
  "call": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/call.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: call");
    return r.json();
  }),
  "camera-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/camera-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: camera-slash");
    return r.json();
  }),
  "camera": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/camera.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: camera");
    return r.json();
  }),
  "candle-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/candle-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: candle-2");
    return r.json();
  }),
  "candle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/candle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: candle");
    return r.json();
  }),
  "car": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/car.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: car");
    return r.json();
  }),
  "card-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/card-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: card-add");
    return r.json();
  }),
  "card-coin": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/card-coin.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: card-coin");
    return r.json();
  }),
  "card-edit": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/card-edit.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: card-edit");
    return r.json();
  }),
  "card-pos": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/card-pos.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: card-pos");
    return r.json();
  }),
  "card-receive": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/card-receive.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: card-receive");
    return r.json();
  }),
  "card-remove-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/card-remove-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: card-remove-2");
    return r.json();
  }),
  "card-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/card-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: card-remove");
    return r.json();
  }),
  "card-send": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/card-send.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: card-send");
    return r.json();
  }),
  "card-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/card-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: card-slash");
    return r.json();
  }),
  "card-tick-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/card-tick-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: card-tick-2");
    return r.json();
  }),
  "card-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/card-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: card-tick");
    return r.json();
  }),
  "card": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/card.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: card");
    return r.json();
  }),
  "cardano-(ada)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cardano-(ada).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cardano-(ada)");
    return r.json();
  }),
  "cards": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cards.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cards");
    return r.json();
  }),
  "category-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/category-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: category-2");
    return r.json();
  }),
  "cd": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cd.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cd");
    return r.json();
  }),
  "celo-(celo)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/celo-(celo).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: celo-(celo)");
    return r.json();
  }),
  "celsius-(cel)-": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/celsius-(cel)-.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: celsius-(cel)-");
    return r.json();
  }),
  "chainlink-(link)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/chainlink-(link).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: chainlink-(link)");
    return r.json();
  }),
  "chart-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/chart-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: chart-2");
    return r.json();
  }),
  "chart-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/chart-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: chart-3");
    return r.json();
  }),
  "chart-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/chart-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: chart-4");
    return r.json();
  }),
  "chart-failure": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/chart-failure.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: chart-failure");
    return r.json();
  }),
  "chart-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/chart-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: chart-square");
    return r.json();
  }),
  "chart-success": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/chart-success.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: chart-success");
    return r.json();
  }),
  "chart": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/chart.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: chart");
    return r.json();
  }),
  "check": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/check.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: check");
    return r.json();
  }),
  "chrome": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/chrome.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: chrome");
    return r.json();
  }),
  "civic-cvc": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/civic-cvc.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: civic-cvc");
    return r.json();
  }),
  "clipboard-close": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/clipboard-close.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: clipboard-close");
    return r.json();
  }),
  "clipboard-export": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/clipboard-export.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: clipboard-export");
    return r.json();
  }),
  "clipboard-import": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/clipboard-import.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: clipboard-import");
    return r.json();
  }),
  "clipboard-text": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/clipboard-text.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: clipboard-text");
    return r.json();
  }),
  "clipboard-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/clipboard-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: clipboard-tick");
    return r.json();
  }),
  "clipboard": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/clipboard.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: clipboard");
    return r.json();
  }),
  "clock": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/clock.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: clock");
    return r.json();
  }),
  "close-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/close-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: close-circle");
    return r.json();
  }),
  "close-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/close-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: close-square");
    return r.json();
  }),
  "cloud-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud-add");
    return r.json();
  }),
  "cloud-change": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud-change.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud-change");
    return r.json();
  }),
  "cloud-connection": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud-connection.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud-connection");
    return r.json();
  }),
  "cloud-cross": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud-cross.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud-cross");
    return r.json();
  }),
  "cloud-drizzle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud-drizzle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud-drizzle");
    return r.json();
  }),
  "cloud-fog": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud-fog.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud-fog");
    return r.json();
  }),
  "cloud-lightning": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud-lightning.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud-lightning");
    return r.json();
  }),
  "cloud-minus": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud-minus.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud-minus");
    return r.json();
  }),
  "cloud-notif": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud-notif.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud-notif");
    return r.json();
  }),
  "cloud-plus": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud-plus.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud-plus");
    return r.json();
  }),
  "cloud-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud-remove");
    return r.json();
  }),
  "cloud-snow": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud-snow.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud-snow");
    return r.json();
  }),
  "cloud-sunny": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud-sunny.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud-sunny");
    return r.json();
  }),
  "cloud": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cloud.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cloud");
    return r.json();
  }),
  "code-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/code-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: code-2");
    return r.json();
  }),
  "code-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/code-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: code-circle");
    return r.json();
  }),
  "code": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/code.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: code");
    return r.json();
  }),
  "coin-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/coin-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: coin-2");
    return r.json();
  }),
  "coin": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/coin.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: coin");
    return r.json();
  }),
  "color-swatch": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/color-swatch.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: color-swatch");
    return r.json();
  }),
  "colorfilter": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/colorfilter.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: colorfilter");
    return r.json();
  }),
  "colors-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/colors-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: colors-square");
    return r.json();
  }),
  "command-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/command-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: command-square");
    return r.json();
  }),
  "command": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/command.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: command");
    return r.json();
  }),
  "component": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/component.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: component");
    return r.json();
  }),
  "computing": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/computing.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: computing");
    return r.json();
  }),
  "convert-3d-cube": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/convert-3d-cube.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: convert-3d-cube");
    return r.json();
  }),
  "convert": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/convert.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: convert");
    return r.json();
  }),
  "convertshape-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/convertshape-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: convertshape-2");
    return r.json();
  }),
  "convertshape": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/convertshape.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: convertshape");
    return r.json();
  }),
  "copy-success": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/copy-success.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: copy-success");
    return r.json();
  }),
  "copy": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/copy.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: copy");
    return r.json();
  }),
  "copyright": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/copyright.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: copyright");
    return r.json();
  }),
  "courthouse": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/courthouse.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: courthouse");
    return r.json();
  }),
  "cpu-charge": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cpu-charge.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cpu-charge");
    return r.json();
  }),
  "cpu-setting": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cpu-setting.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cpu-setting");
    return r.json();
  }),
  "cpu": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cpu.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cpu");
    return r.json();
  }),
  "creative-commons": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/creative-commons.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: creative-commons");
    return r.json();
  }),
  "crop": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/crop.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: crop");
    return r.json();
  }),
  "crown-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/crown-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: crown-2");
    return r.json();
  }),
  "crown": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/crown.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: crown");
    return r.json();
  }),
  "cup": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/cup.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: cup");
    return r.json();
  }),
  "dai-(dai)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/dai-(dai).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: dai-(dai)");
    return r.json();
  }),
  "danger": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/danger.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: danger");
    return r.json();
  }),
  "dash-dash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/dash-dash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: dash-dash");
    return r.json();
  }),
  "data-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/data-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: data-2");
    return r.json();
  }),
  "data": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/data.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: data");
    return r.json();
  }),
  "decred-(dcr)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/decred-(dcr).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: decred-(dcr)");
    return r.json();
  }),
  "dent-crypto-company": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/dent-crypto-company.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: dent-crypto-company");
    return r.json();
  }),
  "designtools": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/designtools.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: designtools");
    return r.json();
  }),
  "device-message": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/device-message.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: device-message");
    return r.json();
  }),
  "devices": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/devices.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: devices");
    return r.json();
  }),
  "diagram": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/diagram.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: diagram");
    return r.json();
  }),
  "diamonds": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/diamonds.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: diamonds");
    return r.json();
  }),
  "direct-down": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/direct-down.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: direct-down");
    return r.json();
  }),
  "direct-inbox": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/direct-inbox.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: direct-inbox");
    return r.json();
  }),
  "direct-left": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/direct-left.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: direct-left");
    return r.json();
  }),
  "direct-normal": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/direct-normal.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: direct-normal");
    return r.json();
  }),
  "direct-notification": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/direct-notification.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: direct-notification");
    return r.json();
  }),
  "direct-right": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/direct-right.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: direct-right");
    return r.json();
  }),
  "direct-send": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/direct-send.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: direct-send");
    return r.json();
  }),
  "direct-up": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/direct-up.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: direct-up");
    return r.json();
  }),
  "direct": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/direct.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: direct");
    return r.json();
  }),
  "directbox-default": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/directbox-default.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: directbox-default");
    return r.json();
  }),
  "directbox-notif": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/directbox-notif.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: directbox-notif");
    return r.json();
  }),
  "directbox-receive": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/directbox-receive.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: directbox-receive");
    return r.json();
  }),
  "directbox-send": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/directbox-send.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: directbox-send");
    return r.json();
  }),
  "discount-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/discount-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: discount-circle");
    return r.json();
  }),
  "discount-shape": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/discount-shape.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: discount-shape");
    return r.json();
  }),
  "discover": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/discover.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: discover");
    return r.json();
  }),
  "dislike": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/dislike.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: dislike");
    return r.json();
  }),
  "document-cloud": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-cloud.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-cloud");
    return r.json();
  }),
  "document-code-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-code-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-code-2");
    return r.json();
  }),
  "document-code": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-code.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-code");
    return r.json();
  }),
  "document-copy": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-copy.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-copy");
    return r.json();
  }),
  "document-download": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-download.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-download");
    return r.json();
  }),
  "document-favorite": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-favorite.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-favorite");
    return r.json();
  }),
  "document-filter": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-filter.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-filter");
    return r.json();
  }),
  "document-forward": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-forward.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-forward");
    return r.json();
  }),
  "document-like": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-like.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-like");
    return r.json();
  }),
  "document-normal": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-normal.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-normal");
    return r.json();
  }),
  "document-previous": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-previous.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-previous");
    return r.json();
  }),
  "document-sketch": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-sketch.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-sketch");
    return r.json();
  }),
  "document-text-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-text-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-text-2");
    return r.json();
  }),
  "document-text": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-text.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-text");
    return r.json();
  }),
  "document-upload": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document-upload.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document-upload");
    return r.json();
  }),
  "document": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/document.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: document");
    return r.json();
  }),
  "dollar-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/dollar-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: dollar-circle");
    return r.json();
  }),
  "dollar-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/dollar-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: dollar-square");
    return r.json();
  }),
  "dribbble": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/dribbble.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: dribbble");
    return r.json();
  }),
  "driver-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/driver-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: driver-2");
    return r.json();
  }),
  "driver-refresh": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/driver-refresh.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: driver-refresh");
    return r.json();
  }),
  "driver": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/driver.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: driver");
    return r.json();
  }),
  "driving": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/driving.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: driving");
    return r.json();
  }),
  "drop": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/drop.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: drop");
    return r.json();
  }),
  "dropbox": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/dropbox.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: dropbox");
    return r.json();
  }),
  "edit-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/edit-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: edit-2");
    return r.json();
  }),
  "edit": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/edit.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: edit");
    return r.json();
  }),
  "educare-(ekt)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/educare-(ekt).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: educare-(ekt)");
    return r.json();
  }),
  "electricity": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/electricity.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: electricity");
    return r.json();
  }),
  "element-1": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/element-1.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: element-1");
    return r.json();
  }),
  "element-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/element-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: element-2");
    return r.json();
  }),
  "element-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/element-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: element-3");
    return r.json();
  }),
  "element-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/element-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: element-4");
    return r.json();
  }),
  "element-equal": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/element-equal.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: element-equal");
    return r.json();
  }),
  "element-plus": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/element-plus.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: element-plus");
    return r.json();
  }),
  "emercoin-(emc)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/emercoin-(emc).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: emercoin-(emc)");
    return r.json();
  }),
  "emoji-happy": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/emoji-happy.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: emoji-happy");
    return r.json();
  }),
  "emoji-normal": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/emoji-normal.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: emoji-normal");
    return r.json();
  }),
  "emoji-sad": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/emoji-sad.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: emoji-sad");
    return r.json();
  }),
  "empty-wallet-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/empty-wallet-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: empty-wallet-add");
    return r.json();
  }),
  "empty-wallet-change": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/empty-wallet-change.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: empty-wallet-change");
    return r.json();
  }),
  "empty-wallet-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/empty-wallet-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: empty-wallet-remove");
    return r.json();
  }),
  "empty-wallet-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/empty-wallet-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: empty-wallet-tick");
    return r.json();
  }),
  "empty-wallet-time": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/empty-wallet-time.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: empty-wallet-time");
    return r.json();
  }),
  "empty-wallet": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/empty-wallet.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: empty-wallet");
    return r.json();
  }),
  "enjin-coin-(enj)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/enjin-coin-(enj).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: enjin-coin-(enj)");
    return r.json();
  }),
  "eos-(eos)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/eos-(eos).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: eos-(eos)");
    return r.json();
  }),
  "eraser": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/eraser.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: eraser");
    return r.json();
  }),
  "ethereum-(eth)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ethereum-(eth).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ethereum-(eth)");
    return r.json();
  }),
  "ethereum-classic-(etc)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ethereum-classic-(etc).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ethereum-classic-(etc)");
    return r.json();
  }),
  "export-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/export-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: export-2");
    return r.json();
  }),
  "export-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/export-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: export-3");
    return r.json();
  }),
  "export-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/export-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: export-4");
    return r.json();
  }),
  "export": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/export.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: export");
    return r.json();
  }),
  "external-drive": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/external-drive.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: external-drive");
    return r.json();
  }),
  "eye-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/eye-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: eye-slash");
    return r.json();
  }),
  "eye": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/eye.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: eye");
    return r.json();
  }),
  "facebook": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/facebook.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: facebook");
    return r.json();
  }),
  "fast-truck": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/fast-truck.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: fast-truck");
    return r.json();
  }),
  "fatrows": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/fatrows.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: fatrows");
    return r.json();
  }),
  "favorite-chart": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/favorite-chart.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: favorite-chart");
    return r.json();
  }),
  "figma-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/figma-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: figma-2");
    return r.json();
  }),
  "figma": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/figma.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: figma");
    return r.json();
  }),
  "filter-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/filter-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: filter-add");
    return r.json();
  }),
  "filter-edit": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/filter-edit.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: filter-edit");
    return r.json();
  }),
  "filter-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/filter-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: filter-remove");
    return r.json();
  }),
  "filter-search": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/filter-search.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: filter-search");
    return r.json();
  }),
  "filter-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/filter-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: filter-square");
    return r.json();
  }),
  "filter-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/filter-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: filter-tick");
    return r.json();
  }),
  "filter": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/filter.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: filter");
    return r.json();
  }),
  "finger-cricle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/finger-cricle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: finger-cricle");
    return r.json();
  }),
  "finger-scan": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/finger-scan.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: finger-scan");
    return r.json();
  }),
  "firstline": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/firstline.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: firstline");
    return r.json();
  }),
  "flag-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/flag-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: flag-2");
    return r.json();
  }),
  "flag": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/flag.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: flag");
    return r.json();
  }),
  "flash-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/flash-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: flash-circle");
    return r.json();
  }),
  "flash-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/flash-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: flash-slash");
    return r.json();
  }),
  "flash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/flash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: flash");
    return r.json();
  }),
  "folder-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/folder-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: folder-2");
    return r.json();
  }),
  "folder-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/folder-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: folder-add");
    return r.json();
  }),
  "folder-cloud": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/folder-cloud.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: folder-cloud");
    return r.json();
  }),
  "folder-connection": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/folder-connection.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: folder-connection");
    return r.json();
  }),
  "folder-cross": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/folder-cross.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: folder-cross");
    return r.json();
  }),
  "folder-favorite": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/folder-favorite.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: folder-favorite");
    return r.json();
  }),
  "folder-minus": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/folder-minus.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: folder-minus");
    return r.json();
  }),
  "folder-open": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/folder-open.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: folder-open");
    return r.json();
  }),
  "folder": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/folder.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: folder");
    return r.json();
  }),
  "format-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/format-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: format-circle");
    return r.json();
  }),
  "format-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/format-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: format-square");
    return r.json();
  }),
  "forward-10-seconds": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/forward-10-seconds.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: forward-10-seconds");
    return r.json();
  }),
  "forward-15-seconds": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/forward-15-seconds.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: forward-15-seconds");
    return r.json();
  }),
  "forward-5-seconds": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/forward-5-seconds.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: forward-5-seconds");
    return r.json();
  }),
  "forward-item": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/forward-item.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: forward-item");
    return r.json();
  }),
  "forward-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/forward-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: forward-square");
    return r.json();
  }),
  "forward": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/forward.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: forward");
    return r.json();
  }),
  "framer": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/framer.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: framer");
    return r.json();
  }),
  "ftx-token-(ftt)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ftx-token-(ftt).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ftx-token-(ftt)");
    return r.json();
  }),
  "gallery-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gallery-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gallery-add");
    return r.json();
  }),
  "gallery-edit": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gallery-edit.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gallery-edit");
    return r.json();
  }),
  "gallery-export": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gallery-export.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gallery-export");
    return r.json();
  }),
  "gallery-favorite": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gallery-favorite.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gallery-favorite");
    return r.json();
  }),
  "gallery-import": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gallery-import.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gallery-import");
    return r.json();
  }),
  "gallery-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gallery-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gallery-remove");
    return r.json();
  }),
  "gallery-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gallery-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gallery-slash");
    return r.json();
  }),
  "gallery-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gallery-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gallery-tick");
    return r.json();
  }),
  "gallery": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gallery.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gallery");
    return r.json();
  }),
  "game": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/game.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: game");
    return r.json();
  }),
  "gameboy": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gameboy.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gameboy");
    return r.json();
  }),
  "gas-station": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gas-station.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gas-station");
    return r.json();
  }),
  "gemini-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gemini-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gemini-2");
    return r.json();
  }),
  "gemini": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gemini.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gemini");
    return r.json();
  }),
  "ghost": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ghost.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ghost");
    return r.json();
  }),
  "gift": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gift.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gift");
    return r.json();
  }),
  "glass": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/glass.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: glass");
    return r.json();
  }),
  "global-edit": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/global-edit.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: global-edit");
    return r.json();
  }),
  "global-refresh": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/global-refresh.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: global-refresh");
    return r.json();
  }),
  "global-search": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/global-search.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: global-search");
    return r.json();
  }),
  "global": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/global.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: global");
    return r.json();
  }),
  "google-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/google-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: google-2");
    return r.json();
  }),
  "google-play": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/google-play.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: google-play");
    return r.json();
  }),
  "google": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/google.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: google");
    return r.json();
  }),
  "gps-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gps-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gps-slash");
    return r.json();
  }),
  "gps": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/gps.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: gps");
    return r.json();
  }),
  "grammerly": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/grammerly.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: grammerly");
    return r.json();
  }),
  "graph": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/graph.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: graph");
    return r.json();
  }),
  "grid-1": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/grid-1.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: grid-1");
    return r.json();
  }),
  "grid-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/grid-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: grid-2");
    return r.json();
  }),
  "grid-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/grid-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: grid-3");
    return r.json();
  }),
  "grid-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/grid-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: grid-4");
    return r.json();
  }),
  "grid-5": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/grid-5.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: grid-5");
    return r.json();
  }),
  "grid-6": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/grid-6.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: grid-6");
    return r.json();
  }),
  "grid-7": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/grid-7.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: grid-7");
    return r.json();
  }),
  "grid-8": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/grid-8.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: grid-8");
    return r.json();
  }),
  "grid-9": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/grid-9.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: grid-9");
    return r.json();
  }),
  "grid-edit": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/grid-edit.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: grid-edit");
    return r.json();
  }),
  "grid-eraser": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/grid-eraser.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: grid-eraser");
    return r.json();
  }),
  "grid-lock": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/grid-lock.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: grid-lock");
    return r.json();
  }),
  "group-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/group-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: group-2");
    return r.json();
  }),
  "group-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/group-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: group-3");
    return r.json();
  }),
  "group": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/group.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: group");
    return r.json();
  }),
  "happyemoji": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/happyemoji.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: happyemoji");
    return r.json();
  }),
  "harmony-(one)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/harmony-(one).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: harmony-(one)");
    return r.json();
  }),
  "hashtag-down": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/hashtag-down.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: hashtag-down");
    return r.json();
  }),
  "hashtag-up": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/hashtag-up.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: hashtag-up");
    return r.json();
  }),
  "hashtag": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/hashtag.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: hashtag");
    return r.json();
  }),
  "headphone": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/headphone.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: headphone");
    return r.json();
  }),
  "headphones": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/headphones.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: headphones");
    return r.json();
  }),
  "heart-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/heart-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: heart-add");
    return r.json();
  }),
  "heart-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/heart-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: heart-circle");
    return r.json();
  }),
  "heart-edit": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/heart-edit.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: heart-edit");
    return r.json();
  }),
  "heart-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/heart-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: heart-remove");
    return r.json();
  }),
  "heart-search": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/heart-search.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: heart-search");
    return r.json();
  }),
  "heart-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/heart-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: heart-slash");
    return r.json();
  }),
  "heart-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/heart-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: heart-tick");
    return r.json();
  }),
  "heart": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/heart.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: heart");
    return r.json();
  }),
  "hedera-hashgraph-(hbar)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/hedera-hashgraph-(hbar).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: hedera-hashgraph-(hbar)");
    return r.json();
  }),
  "hex-(hex)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/hex-(hex).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: hex-(hex)");
    return r.json();
  }),
  "hierarchy-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/hierarchy-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: hierarchy-2");
    return r.json();
  }),
  "hierarchy-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/hierarchy-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: hierarchy-3");
    return r.json();
  }),
  "hierarchy-square-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/hierarchy-square-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: hierarchy-square-2");
    return r.json();
  }),
  "hierarchy-square-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/hierarchy-square-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: hierarchy-square-3");
    return r.json();
  }),
  "hierarchy-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/hierarchy-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: hierarchy-square");
    return r.json();
  }),
  "hierarchy": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/hierarchy.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: hierarchy");
    return r.json();
  }),
  "home-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/home-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: home-2");
    return r.json();
  }),
  "home-hashtag": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/home-hashtag.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: home-hashtag");
    return r.json();
  }),
  "home-trend-down": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/home-trend-down.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: home-trend-down");
    return r.json();
  }),
  "home-trend-up": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/home-trend-up.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: home-trend-up");
    return r.json();
  }),
  "home-wifi": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/home-wifi.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: home-wifi");
    return r.json();
  }),
  "home": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/home.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: home");
    return r.json();
  }),
  "hospital": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/hospital.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: hospital");
    return r.json();
  }),
  "house-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/house-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: house-2");
    return r.json();
  }),
  "house": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/house.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: house");
    return r.json();
  }),
  "html-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/html-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: html-3");
    return r.json();
  }),
  "html-5": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/html-5.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: html-5");
    return r.json();
  }),
  "huobi-token-(ht)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/huobi-token-(ht).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: huobi-token-(ht)");
    return r.json();
  }),
  "icon-(icx)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/icon-(icx).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: icon-(icx)");
    return r.json();
  }),
  "illustrator": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/illustrator.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: illustrator");
    return r.json();
  }),
  "image": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/image.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: image");
    return r.json();
  }),
  "import-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/import-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: import-2");
    return r.json();
  }),
  "import-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/import-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: import-3");
    return r.json();
  }),
  "import-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/import-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: import-4");
    return r.json();
  }),
  "import": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/import.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: import");
    return r.json();
  }),
  "info-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/info-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: info-circle");
    return r.json();
  }),
  "information": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/information.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: information");
    return r.json();
  }),
  "instagram": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/instagram.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: instagram");
    return r.json();
  }),
  "iost-iost": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/iost-iost.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: iost-iost");
    return r.json();
  }),
  "java-script": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/java-script.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: java-script");
    return r.json();
  }),
  "js": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/js.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: js");
    return r.json();
  }),
  "judge": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/judge.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: judge");
    return r.json();
  }),
  "kanban": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/kanban.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: kanban");
    return r.json();
  }),
  "key-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/key-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: key-square");
    return r.json();
  }),
  "key": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/key.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: key");
    return r.json();
  }),
  "keyboard-open": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/keyboard-open.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: keyboard-open");
    return r.json();
  }),
  "keyboard": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/keyboard.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: keyboard");
    return r.json();
  }),
  "kyber-network-(knc)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/kyber-network-(knc).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: kyber-network-(knc)");
    return r.json();
  }),
  "lamp-charge": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/lamp-charge.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: lamp-charge");
    return r.json();
  }),
  "lamp-on": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/lamp-on.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: lamp-on");
    return r.json();
  }),
  "lamp-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/lamp-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: lamp-slash");
    return r.json();
  }),
  "lamp": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/lamp.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: lamp");
    return r.json();
  }),
  "language-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/language-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: language-circle");
    return r.json();
  }),
  "language-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/language-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: language-square");
    return r.json();
  }),
  "layer": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/layer.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: layer");
    return r.json();
  }),
  "level": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/level.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: level");
    return r.json();
  }),
  "lifebuoy": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/lifebuoy.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: lifebuoy");
    return r.json();
  }),
  "like-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/like-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: like-2");
    return r.json();
  }),
  "like-dislike": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/like-dislike.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: like-dislike");
    return r.json();
  }),
  "like-shapes": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/like-shapes.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: like-shapes");
    return r.json();
  }),
  "like-tag": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/like-tag.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: like-tag");
    return r.json();
  }),
  "like": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/like.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: like");
    return r.json();
  }),
  "link-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/link-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: link-2");
    return r.json();
  }),
  "link-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/link-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: link-3");
    return r.json();
  }),
  "link-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/link-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: link-4");
    return r.json();
  }),
  "link-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/link-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: link-circle");
    return r.json();
  }),
  "link-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/link-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: link-square");
    return r.json();
  }),
  "link": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/link.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: link");
    return r.json();
  }),
  "litecoin(ltc)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/litecoin(ltc).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: litecoin(ltc)");
    return r.json();
  }),
  "location-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/location-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: location-add");
    return r.json();
  }),
  "location-cross": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/location-cross.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: location-cross");
    return r.json();
  }),
  "location-minus": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/location-minus.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: location-minus");
    return r.json();
  }),
  "location-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/location-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: location-slash");
    return r.json();
  }),
  "location-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/location-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: location-tick");
    return r.json();
  }),
  "location": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/location.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: location");
    return r.json();
  }),
  "lock-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/lock-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: lock-2");
    return r.json();
  }),
  "lock-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/lock-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: lock-circle");
    return r.json();
  }),
  "lock-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/lock-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: lock-slash");
    return r.json();
  }),
  "lock": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/lock.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: lock");
    return r.json();
  }),
  "login-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/login-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: login-2");
    return r.json();
  }),
  "login": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/login.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: login");
    return r.json();
  }),
  "logout-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/logout-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: logout-2");
    return r.json();
  }),
  "logout": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/logout.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: logout");
    return r.json();
  }),
  "lovely": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/lovely.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: lovely");
    return r.json();
  }),
  "magic-star": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/magic-star.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: magic-star");
    return r.json();
  }),
  "magicpen": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/magicpen.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: magicpen");
    return r.json();
  }),
  "main-component": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/main-component.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: main-component");
    return r.json();
  }),
  "maker-(mkr)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/maker-(mkr).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: maker-(mkr)");
    return r.json();
  }),
  "man": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/man.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: man");
    return r.json();
  }),
  "map-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/map-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: map-2");
    return r.json();
  }),
  "map": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/map.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: map");
    return r.json();
  }),
  "mask-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/mask-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: mask-2");
    return r.json();
  }),
  "mask-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/mask-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: mask-3");
    return r.json();
  }),
  "mask": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/mask.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: mask");
    return r.json();
  }),
  "maximize-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/maximize-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: maximize-2");
    return r.json();
  }),
  "maximize-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/maximize-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: maximize-3");
    return r.json();
  }),
  "maximize-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/maximize-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: maximize-4");
    return r.json();
  }),
  "maximize-5": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/maximize-5.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: maximize-5");
    return r.json();
  }),
  "maximize-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/maximize-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: maximize-circle");
    return r.json();
  }),
  "maximize": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/maximize.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: maximize");
    return r.json();
  }),
  "medal-star": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/medal-star.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: medal-star");
    return r.json();
  }),
  "medal": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/medal.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: medal");
    return r.json();
  }),
  "menu-board": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/menu-board.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: menu-board");
    return r.json();
  }),
  "menu": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/menu.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: menu");
    return r.json();
  }),
  "message-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-2");
    return r.json();
  }),
  "message-add-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-add-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-add-2");
    return r.json();
  }),
  "message-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-add");
    return r.json();
  }),
  "message-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-circle");
    return r.json();
  }),
  "message-favorite": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-favorite.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-favorite");
    return r.json();
  }),
  "message-minus": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-minus.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-minus");
    return r.json();
  }),
  "message-notif": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-notif.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-notif");
    return r.json();
  }),
  "message-programming": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-programming.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-programming");
    return r.json();
  }),
  "message-question": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-question.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-question");
    return r.json();
  }),
  "message-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-remove");
    return r.json();
  }),
  "message-search": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-search.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-search");
    return r.json();
  }),
  "message-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-square");
    return r.json();
  }),
  "message-text-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-text-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-text-2");
    return r.json();
  }),
  "message-text": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-text.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-text");
    return r.json();
  }),
  "message-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-tick");
    return r.json();
  }),
  "message-time": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message-time.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message-time");
    return r.json();
  }),
  "message": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/message.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: message");
    return r.json();
  }),
  "messages-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/messages-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: messages-2");
    return r.json();
  }),
  "messages-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/messages-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: messages-3");
    return r.json();
  }),
  "messages-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/messages-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: messages-4");
    return r.json();
  }),
  "messages": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/messages.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: messages");
    return r.json();
  }),
  "messenger": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/messenger.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: messenger");
    return r.json();
  }),
  "microphone-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/microphone-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: microphone-2");
    return r.json();
  }),
  "microphone-slash-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/microphone-slash-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: microphone-slash-2");
    return r.json();
  }),
  "microphone-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/microphone-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: microphone-slash");
    return r.json();
  }),
  "microphone": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/microphone.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: microphone");
    return r.json();
  }),
  "microscope": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/microscope.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: microscope");
    return r.json();
  }),
  "milk": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/milk.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: milk");
    return r.json();
  }),
  "mini-music-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/mini-music-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: mini-music-square");
    return r.json();
  }),
  "minus-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/minus-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: minus-circle");
    return r.json();
  }),
  "minus-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/minus-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: minus-square");
    return r.json();
  }),
  "minus": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/minus.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: minus");
    return r.json();
  }),
  "mirror": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/mirror.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: mirror");
    return r.json();
  }),
  "mirroring-screen": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/mirroring-screen.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: mirroring-screen");
    return r.json();
  }),
  "mobile-programming": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/mobile-programming.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: mobile-programming");
    return r.json();
  }),
  "mobile": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/mobile.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: mobile");
    return r.json();
  }),
  "monero-xmr": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/monero-xmr.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: monero-xmr");
    return r.json();
  }),
  "money-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/money-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: money-2");
    return r.json();
  }),
  "money-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/money-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: money-3");
    return r.json();
  }),
  "money-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/money-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: money-4");
    return r.json();
  }),
  "money-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/money-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: money-add");
    return r.json();
  }),
  "money-change": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/money-change.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: money-change");
    return r.json();
  }),
  "money-forbidden": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/money-forbidden.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: money-forbidden");
    return r.json();
  }),
  "money-recive": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/money-recive.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: money-recive");
    return r.json();
  }),
  "money-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/money-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: money-remove");
    return r.json();
  }),
  "money-send": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/money-send.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: money-send");
    return r.json();
  }),
  "money-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/money-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: money-tick");
    return r.json();
  }),
  "money-time": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/money-time.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: money-time");
    return r.json();
  }),
  "money": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/money.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: money");
    return r.json();
  }),
  "moneys": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/moneys.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: moneys");
    return r.json();
  }),
  "monitor-mobbile": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/monitor-mobbile.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: monitor-mobbile");
    return r.json();
  }),
  "monitor-recorder": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/monitor-recorder.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: monitor-recorder");
    return r.json();
  }),
  "monitor": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/monitor.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: monitor");
    return r.json();
  }),
  "moon": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/moon.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: moon");
    return r.json();
  }),
  "more-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/more-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: more-2");
    return r.json();
  }),
  "more-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/more-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: more-circle");
    return r.json();
  }),
  "more-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/more-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: more-square");
    return r.json();
  }),
  "more": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/more.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: more");
    return r.json();
  }),
  "mouse-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/mouse-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: mouse-circle");
    return r.json();
  }),
  "mouse-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/mouse-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: mouse-square");
    return r.json();
  }),
  "mouse": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/mouse.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: mouse");
    return r.json();
  }),
  "music-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/music-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: music-circle");
    return r.json();
  }),
  "music-dashboard": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/music-dashboard.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: music-dashboard");
    return r.json();
  }),
  "music-filter": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/music-filter.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: music-filter");
    return r.json();
  }),
  "music-library-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/music-library-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: music-library-2");
    return r.json();
  }),
  "music-play": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/music-play.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: music-play");
    return r.json();
  }),
  "music-playlist": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/music-playlist.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: music-playlist");
    return r.json();
  }),
  "music-square-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/music-square-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: music-square-add");
    return r.json();
  }),
  "music-square-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/music-square-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: music-square-remove");
    return r.json();
  }),
  "music-square-search": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/music-square-search.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: music-square-search");
    return r.json();
  }),
  "music-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/music-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: music-square");
    return r.json();
  }),
  "music": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/music.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: music");
    return r.json();
  }),
  "musicnote": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/musicnote.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: musicnote");
    return r.json();
  }),
  "nebulas-(nas)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/nebulas-(nas).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: nebulas-(nas)");
    return r.json();
  }),
  "nem-(xem)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/nem-(xem).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: nem-(xem)");
    return r.json();
  }),
  "nexo-(nexo)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/nexo-(nexo).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: nexo-(nexo)");
    return r.json();
  }),
  "next": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/next.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: next");
    return r.json();
  }),
  "note-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/note-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: note-2");
    return r.json();
  }),
  "note-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/note-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: note-add");
    return r.json();
  }),
  "note-favorite": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/note-favorite.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: note-favorite");
    return r.json();
  }),
  "note-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/note-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: note-remove");
    return r.json();
  }),
  "note-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/note-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: note-square");
    return r.json();
  }),
  "note-text": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/note-text.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: note-text");
    return r.json();
  }),
  "note": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/note.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: note");
    return r.json();
  }),
  "notification-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/notification-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: notification-2");
    return r.json();
  }),
  "notification-bing": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/notification-bing.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: notification-bing");
    return r.json();
  }),
  "notification-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/notification-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: notification-circle");
    return r.json();
  }),
  "notification-favorite": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/notification-favorite.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: notification-favorite");
    return r.json();
  }),
  "notification-status": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/notification-status.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: notification-status");
    return r.json();
  }),
  "notification": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/notification.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: notification");
    return r.json();
  }),
  "ocean-protocol-(ocean)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ocean-protocol-(ocean).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ocean-protocol-(ocean)");
    return r.json();
  }),
  "ok-app": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ok-app.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ok-app");
    return r.json();
  }),
  "okb-(okb)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/okb-(okb).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: okb-(okb)");
    return r.json();
  }),
  "omega-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/omega-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: omega-circle");
    return r.json();
  }),
  "omega-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/omega-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: omega-square");
    return r.json();
  }),
  "ontology-(ont)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ontology-(ont).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ontology-(ont)");
    return r.json();
  }),
  "paintbucket": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/paintbucket.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: paintbucket");
    return r.json();
  }),
  "paperclip-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/paperclip-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: paperclip-2");
    return r.json();
  }),
  "paperclip": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/paperclip.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: paperclip");
    return r.json();
  }),
  "paragraphspacing": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/paragraphspacing.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: paragraphspacing");
    return r.json();
  }),
  "password-check": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/password-check.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: password-check");
    return r.json();
  }),
  "path-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/path-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: path-2");
    return r.json();
  }),
  "path-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/path-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: path-square");
    return r.json();
  }),
  "path": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/path.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: path");
    return r.json();
  }),
  "pause-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/pause-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: pause-circle");
    return r.json();
  }),
  "pause": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/pause.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: pause");
    return r.json();
  }),
  "paypal": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/paypal.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: paypal");
    return r.json();
  }),
  "pen-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/pen-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: pen-add");
    return r.json();
  }),
  "pen-close": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/pen-close.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: pen-close");
    return r.json();
  }),
  "pen-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/pen-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: pen-remove");
    return r.json();
  }),
  "pen-tool-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/pen-tool-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: pen-tool-2");
    return r.json();
  }),
  "pen-tool": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/pen-tool.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: pen-tool");
    return r.json();
  }),
  "people": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/people.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: people");
    return r.json();
  }),
  "percentage-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/percentage-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: percentage-square");
    return r.json();
  }),
  "personalcard": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/personalcard.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: personalcard");
    return r.json();
  }),
  "pet": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/pet.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: pet");
    return r.json();
  }),
  "photoshop": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/photoshop.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: photoshop");
    return r.json();
  }),
  "play-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/play-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: play-add");
    return r.json();
  }),
  "play-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/play-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: play-circle");
    return r.json();
  }),
  "play-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/play-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: play-remove");
    return r.json();
  }),
  "play": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/play.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: play");
    return r.json();
  }),
  "polkadot-dot": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/polkadot-dot.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: polkadot-dot");
    return r.json();
  }),
  "polygon-(matic)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/polygon-(matic).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: polygon-(matic)");
    return r.json();
  }),
  "polyswarm-(nct)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/polyswarm-(nct).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: polyswarm-(nct)");
    return r.json();
  }),
  "presention-chart": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/presention-chart.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: presention-chart");
    return r.json();
  }),
  "previous": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/previous.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: previous");
    return r.json();
  }),
  "printer-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/printer-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: printer-slash");
    return r.json();
  }),
  "printer": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/printer.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: printer");
    return r.json();
  }),
  "profile-2user": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/profile-2user.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: profile-2user");
    return r.json();
  }),
  "profile-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/profile-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: profile-add");
    return r.json();
  }),
  "profile-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/profile-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: profile-circle");
    return r.json();
  }),
  "profile-delete": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/profile-delete.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: profile-delete");
    return r.json();
  }),
  "profile-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/profile-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: profile-remove");
    return r.json();
  }),
  "profile-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/profile-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: profile-tick");
    return r.json();
  }),
  "profile": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/profile.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: profile");
    return r.json();
  }),
  "programming-arrow": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/programming-arrow.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: programming-arrow");
    return r.json();
  }),
  "programming-arrows": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/programming-arrows.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: programming-arrows");
    return r.json();
  }),
  "python": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/python.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: python");
    return r.json();
  }),
  "quant-(qnt)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/quant-(qnt).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: quant-(qnt)");
    return r.json();
  }),
  "quote-down-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/quote-down-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: quote-down-circle");
    return r.json();
  }),
  "quote-down-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/quote-down-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: quote-down-square");
    return r.json();
  }),
  "quote-down": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/quote-down.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: quote-down");
    return r.json();
  }),
  "quote-up-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/quote-up-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: quote-up-circle");
    return r.json();
  }),
  "quote-up-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/quote-up-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: quote-up-square");
    return r.json();
  }),
  "quote-up": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/quote-up.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: quote-up");
    return r.json();
  }),
  "radar-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/radar-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: radar-2");
    return r.json();
  }),
  "radar": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/radar.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: radar");
    return r.json();
  }),
  "radio": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/radio.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: radio");
    return r.json();
  }),
  "ram-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ram-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ram-2");
    return r.json();
  }),
  "ram": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ram.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ram");
    return r.json();
  }),
  "ranking": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ranking.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ranking");
    return r.json();
  }),
  "receipt-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receipt-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receipt-2");
    return r.json();
  }),
  "receipt-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receipt-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receipt-3");
    return r.json();
  }),
  "receipt-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receipt-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receipt-4");
    return r.json();
  }),
  "receipt-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receipt-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receipt-add");
    return r.json();
  }),
  "receipt-discount": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receipt-discount.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receipt-discount");
    return r.json();
  }),
  "receipt-disscount": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receipt-disscount.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receipt-disscount");
    return r.json();
  }),
  "receipt-edit": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receipt-edit.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receipt-edit");
    return r.json();
  }),
  "receipt-item": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receipt-item.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receipt-item");
    return r.json();
  }),
  "receipt-minus": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receipt-minus.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receipt-minus");
    return r.json();
  }),
  "receipt-search": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receipt-search.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receipt-search");
    return r.json();
  }),
  "receipt-text": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receipt-text.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receipt-text");
    return r.json();
  }),
  "receipt": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receipt.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receipt");
    return r.json();
  }),
  "receive-square-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receive-square-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receive-square-2");
    return r.json();
  }),
  "receive-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/receive-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: receive-square");
    return r.json();
  }),
  "received": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/received.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: received");
    return r.json();
  }),
  "record-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/record-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: record-circle");
    return r.json();
  }),
  "record": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/record.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: record");
    return r.json();
  }),
  "recovery-convert": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/recovery-convert.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: recovery-convert");
    return r.json();
  }),
  "redo": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/redo.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: redo");
    return r.json();
  }),
  "refresh-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/refresh-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: refresh-2");
    return r.json();
  }),
  "refresh-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/refresh-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: refresh-circle");
    return r.json();
  }),
  "refresh-left-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/refresh-left-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: refresh-left-square");
    return r.json();
  }),
  "refresh-right-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/refresh-right-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: refresh-right-square");
    return r.json();
  }),
  "refresh-square-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/refresh-square-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: refresh-square-2");
    return r.json();
  }),
  "refresh": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/refresh.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: refresh");
    return r.json();
  }),
  "repeat-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/repeat-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: repeat-circle");
    return r.json();
  }),
  "repeat": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/repeat.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: repeat");
    return r.json();
  }),
  "repeate-music": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/repeate-music.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: repeate-music");
    return r.json();
  }),
  "repeate-one": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/repeate-one.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: repeate-one");
    return r.json();
  }),
  "reserve": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/reserve.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: reserve");
    return r.json();
  }),
  "rotate-left": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/rotate-left.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: rotate-left");
    return r.json();
  }),
  "rotate-right": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/rotate-right.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: rotate-right");
    return r.json();
  }),
  "routing": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/routing.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: routing");
    return r.json();
  }),
  "row-horizontal": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/row-horizontal.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: row-horizontal");
    return r.json();
  }),
  "row-vertical": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/row-vertical.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: row-vertical");
    return r.json();
  }),
  "ruler&pen": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ruler&pen.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ruler&pen");
    return r.json();
  }),
  "ruler": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ruler.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ruler");
    return r.json();
  }),
  "safe-home": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/safe-home.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: safe-home");
    return r.json();
  }),
  "sagittarius": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sagittarius.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sagittarius");
    return r.json();
  }),
  "scan-barcode": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/scan-barcode.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: scan-barcode");
    return r.json();
  }),
  "scan": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/scan.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: scan");
    return r.json();
  }),
  "scanner": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/scanner.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: scanner");
    return r.json();
  }),
  "scanning": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/scanning.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: scanning");
    return r.json();
  }),
  "scissor": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/scissor.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: scissor");
    return r.json();
  }),
  "screenmirroring": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/screenmirroring.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: screenmirroring");
    return r.json();
  }),
  "scroll": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/scroll.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: scroll");
    return r.json();
  }),
  "search-favorite-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/search-favorite-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: search-favorite-2");
    return r.json();
  }),
  "search-favorite": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/search-favorite.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: search-favorite");
    return r.json();
  }),
  "search-normal-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/search-normal-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: search-normal-2");
    return r.json();
  }),
  "search-normal": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/search-normal.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: search-normal");
    return r.json();
  }),
  "search-status-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/search-status-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: search-status-2");
    return r.json();
  }),
  "search-status": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/search-status.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: search-status");
    return r.json();
  }),
  "search-zoom-in-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/search-zoom-in-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: search-zoom-in-2");
    return r.json();
  }),
  "search-zoom-in": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/search-zoom-in.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: search-zoom-in");
    return r.json();
  }),
  "search-zoom-out-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/search-zoom-out-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: search-zoom-out-2");
    return r.json();
  }),
  "search-zoom-out": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/search-zoom-out.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: search-zoom-out");
    return r.json();
  }),
  "security-card": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/security-card.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: security-card");
    return r.json();
  }),
  "security-safe": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/security-safe.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: security-safe");
    return r.json();
  }),
  "security-time": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/security-time.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: security-time");
    return r.json();
  }),
  "security-user": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/security-user.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: security-user");
    return r.json();
  }),
  "security": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/security.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: security");
    return r.json();
  }),
  "send-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/send-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: send-2");
    return r.json();
  }),
  "send-sqaure-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/send-sqaure-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: send-sqaure-2");
    return r.json();
  }),
  "send-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/send-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: send-square");
    return r.json();
  }),
  "send": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/send.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: send");
    return r.json();
  }),
  "setting-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/setting-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: setting-2");
    return r.json();
  }),
  "setting-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/setting-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: setting-3");
    return r.json();
  }),
  "setting-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/setting-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: setting-4");
    return r.json();
  }),
  "setting-5": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/setting-5.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: setting-5");
    return r.json();
  }),
  "setting": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/setting.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: setting");
    return r.json();
  }),
  "settings": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/settings.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: settings");
    return r.json();
  }),
  "shapes-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shapes-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shapes-2");
    return r.json();
  }),
  "shapes": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shapes.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shapes");
    return r.json();
  }),
  "share": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/share.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: share");
    return r.json();
  }),
  "shield-cross": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shield-cross.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shield-cross");
    return r.json();
  }),
  "shield-search": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shield-search.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shield-search");
    return r.json();
  }),
  "shield-security": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shield-security.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shield-security");
    return r.json();
  }),
  "shield-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shield-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shield-slash");
    return r.json();
  }),
  "shield-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shield-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shield-tick");
    return r.json();
  }),
  "shield": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shield.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shield");
    return r.json();
  }),
  "ship": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ship.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ship");
    return r.json();
  }),
  "shop-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shop-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shop-add");
    return r.json();
  }),
  "shop-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shop-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shop-remove");
    return r.json();
  }),
  "shop": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shop.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shop");
    return r.json();
  }),
  "shopping-bag": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shopping-bag.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shopping-bag");
    return r.json();
  }),
  "shopping-cart": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shopping-cart.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shopping-cart");
    return r.json();
  }),
  "shutterstock": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/shutterstock.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: shutterstock");
    return r.json();
  }),
  "siacoin-(sc)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/siacoin-(sc).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: siacoin-(sc)");
    return r.json();
  }),
  "sidebar-bottom": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sidebar-bottom.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sidebar-bottom");
    return r.json();
  }),
  "sidebar-left": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sidebar-left.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sidebar-left");
    return r.json();
  }),
  "sidebar-right": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sidebar-right.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sidebar-right");
    return r.json();
  }),
  "sidebar-top": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sidebar-top.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sidebar-top");
    return r.json();
  }),
  "signpost": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/signpost.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: signpost");
    return r.json();
  }),
  "simcard-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/simcard-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: simcard-2");
    return r.json();
  }),
  "simcard-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/simcard-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: simcard-3");
    return r.json();
  }),
  "simcard": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/simcard.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: simcard");
    return r.json();
  }),
  "size": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/size.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: size");
    return r.json();
  }),
  "slack": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/slack.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: slack");
    return r.json();
  }),
  "slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: slash");
    return r.json();
  }),
  "slider-horizontal-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/slider-horizontal-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: slider-horizontal-2");
    return r.json();
  }),
  "slider-horizontal": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/slider-horizontal.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: slider-horizontal");
    return r.json();
  }),
  "slider-vertical-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/slider-vertical-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: slider-vertical-2");
    return r.json();
  }),
  "slider-vertical": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/slider-vertical.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: slider-vertical");
    return r.json();
  }),
  "slider": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/slider.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: slider");
    return r.json();
  }),
  "smallcaps": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/smallcaps.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: smallcaps");
    return r.json();
  }),
  "smart-car": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/smart-car.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: smart-car");
    return r.json();
  }),
  "smart-home": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/smart-home.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: smart-home");
    return r.json();
  }),
  "smileys": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/smileys.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: smileys");
    return r.json();
  }),
  "sms-edit": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sms-edit.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sms-edit");
    return r.json();
  }),
  "sms-notification": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sms-notification.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sms-notification");
    return r.json();
  }),
  "sms-search": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sms-search.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sms-search");
    return r.json();
  }),
  "sms-star": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sms-star.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sms-star");
    return r.json();
  }),
  "sms-tracking": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sms-tracking.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sms-tracking");
    return r.json();
  }),
  "sms": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sms.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sms");
    return r.json();
  }),
  "snapchat": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/snapchat.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: snapchat");
    return r.json();
  }),
  "solana-(sol)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/solana-(sol).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: solana-(sol)");
    return r.json();
  }),
  "sort": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sort.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sort");
    return r.json();
  }),
  "sound": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sound.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sound");
    return r.json();
  }),
  "speaker": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/speaker.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: speaker");
    return r.json();
  }),
  "speedometer": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/speedometer.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: speedometer");
    return r.json();
  }),
  "spotify": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/spotify.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: spotify");
    return r.json();
  }),
  "stacks-(stx)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/stacks-(stx).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: stacks-(stx)");
    return r.json();
  }),
  "star-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/star-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: star-2");
    return r.json();
  }),
  "star-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/star-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: star-slash");
    return r.json();
  }),
  "star": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/star.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: star");
    return r.json();
  }),
  "status-up": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/status-up.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: status-up");
    return r.json();
  }),
  "status": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/status.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: status");
    return r.json();
  }),
  "stellar-(xlm)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/stellar-(xlm).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: stellar-(xlm)");
    return r.json();
  }),
  "sticker": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sticker.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sticker");
    return r.json();
  }),
  "stickynote": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/stickynote.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: stickynote");
    return r.json();
  }),
  "stop-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/stop-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: stop-circle");
    return r.json();
  }),
  "stop": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/stop.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: stop");
    return r.json();
  }),
  "story": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/story.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: story");
    return r.json();
  }),
  "strongbox-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/strongbox-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: strongbox-2");
    return r.json();
  }),
  "strongbox": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/strongbox.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: strongbox");
    return r.json();
  }),
  "subtitle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/subtitle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: subtitle");
    return r.json();
  }),
  "sun-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sun-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sun-2");
    return r.json();
  }),
  "sun-fog": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sun-fog.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sun-fog");
    return r.json();
  }),
  "sun": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/sun.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: sun");
    return r.json();
  }),
  "tag-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/tag-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: tag-2");
    return r.json();
  }),
  "tag-cross": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/tag-cross.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: tag-cross");
    return r.json();
  }),
  "tag-right": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/tag-right.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: tag-right");
    return r.json();
  }),
  "tag-user": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/tag-user.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: tag-user");
    return r.json();
  }),
  "tag": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/tag.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: tag");
    return r.json();
  }),
  "task-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/task-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: task-square");
    return r.json();
  }),
  "task": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/task.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: task");
    return r.json();
  }),
  "teacher": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/teacher.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: teacher");
    return r.json();
  }),
  "tenx-(pay)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/tenx-(pay).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: tenx-(pay)");
    return r.json();
  }),
  "tether-usdt": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/tether-usdt.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: tether-usdt");
    return r.json();
  }),
  "text-block": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/text-block.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: text-block");
    return r.json();
  }),
  "text-bold": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/text-bold.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: text-bold");
    return r.json();
  }),
  "text-italic": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/text-italic.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: text-italic");
    return r.json();
  }),
  "text-underline": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/text-underline.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: text-underline");
    return r.json();
  }),
  "text": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/text.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: text");
    return r.json();
  }),
  "textalign-center": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/textalign-center.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: textalign-center");
    return r.json();
  }),
  "textalign-justifycenter": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/textalign-justifycenter.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: textalign-justifycenter");
    return r.json();
  }),
  "textalign-justifyleft": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/textalign-justifyleft.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: textalign-justifyleft");
    return r.json();
  }),
  "textalign-justifyright": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/textalign-justifyright.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: textalign-justifyright");
    return r.json();
  }),
  "textalign-left": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/textalign-left.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: textalign-left");
    return r.json();
  }),
  "textalign-right": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/textalign-right.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: textalign-right");
    return r.json();
  }),
  "the-graph-(grt)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/the-graph-(grt).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: the-graph-(grt)");
    return r.json();
  }),
  "theta-(theta)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/theta-(theta).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: theta-(theta)");
    return r.json();
  }),
  "thorchain-(rune)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/thorchain-(rune).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: thorchain-(rune)");
    return r.json();
  }),
  "tick-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/tick-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: tick-circle");
    return r.json();
  }),
  "tick-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/tick-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: tick-square");
    return r.json();
  }),
  "ticket-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ticket-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ticket-2");
    return r.json();
  }),
  "ticket-discount": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ticket-discount.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ticket-discount");
    return r.json();
  }),
  "ticket-expired": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ticket-expired.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ticket-expired");
    return r.json();
  }),
  "ticket-star": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ticket-star.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ticket-star");
    return r.json();
  }),
  "ticket": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ticket.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ticket");
    return r.json();
  }),
  "timer-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/timer-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: timer-2");
    return r.json();
  }),
  "timer-pause": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/timer-pause.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: timer-pause");
    return r.json();
  }),
  "timer-start": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/timer-start.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: timer-start");
    return r.json();
  }),
  "timer": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/timer.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: timer");
    return r.json();
  }),
  "toggle-off": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/toggle-off.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: toggle-off");
    return r.json();
  }),
  "toggle-on-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/toggle-on-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: toggle-on-circle");
    return r.json();
  }),
  "toggle-on": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/toggle-on.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: toggle-on");
    return r.json();
  }),
  "trade": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/trade.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: trade");
    return r.json();
  }),
  "transaction-minus": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/transaction-minus.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: transaction-minus");
    return r.json();
  }),
  "translate": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/translate.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: translate");
    return r.json();
  }),
  "trash-bin": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/trash-bin.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: trash-bin");
    return r.json();
  }),
  "tree": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/tree.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: tree");
    return r.json();
  }),
  "trello": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/trello.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: trello");
    return r.json();
  }),
  "trend-down": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/trend-down.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: trend-down");
    return r.json();
  }),
  "trend-up": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/trend-up.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: trend-up");
    return r.json();
  }),
  "triangle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/triangle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: triangle");
    return r.json();
  }),
  "trontron-(trx)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/trontron-(trx).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: trontron-(trx)");
    return r.json();
  }),
  "truck-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/truck-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: truck-remove");
    return r.json();
  }),
  "truck-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/truck-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: truck-tick");
    return r.json();
  }),
  "truck-time": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/truck-time.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: truck-time");
    return r.json();
  }),
  "truck": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/truck.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: truck");
    return r.json();
  }),
  "trush-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/trush-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: trush-square");
    return r.json();
  }),
  "twitch": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/twitch.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: twitch");
    return r.json();
  }),
  "ui8": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/ui8.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: ui8");
    return r.json();
  }),
  "undo": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/undo.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: undo");
    return r.json();
  }),
  "unlimited": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/unlimited.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: unlimited");
    return r.json();
  }),
  "unlock": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/unlock.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: unlock");
    return r.json();
  }),
  "usd-coin-(usdc)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/usd-coin-(usdc).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: usd-coin-(usdc)");
    return r.json();
  }),
  "user-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/user-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: user-add");
    return r.json();
  }),
  "user-circle-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/user-circle-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: user-circle-add");
    return r.json();
  }),
  "user-edit": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/user-edit.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: user-edit");
    return r.json();
  }),
  "user-minus": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/user-minus.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: user-minus");
    return r.json();
  }),
  "user-octagon": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/user-octagon.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: user-octagon");
    return r.json();
  }),
  "user-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/user-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: user-remove");
    return r.json();
  }),
  "user-search": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/user-search.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: user-search");
    return r.json();
  }),
  "user-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/user-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: user-square");
    return r.json();
  }),
  "user-tag": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/user-tag.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: user-tag");
    return r.json();
  }),
  "user-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/user-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: user-tick");
    return r.json();
  }),
  "user": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/user.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: user");
    return r.json();
  }),
  "velas-(vlx)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/velas-(vlx).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: velas-(vlx)");
    return r.json();
  }),
  "verify": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/verify.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: verify");
    return r.json();
  }),
  "vibe-vibe": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/vibe-vibe.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: vibe-vibe");
    return r.json();
  }),
  "video-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/video-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: video-add");
    return r.json();
  }),
  "video-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/video-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: video-circle");
    return r.json();
  }),
  "video-horizontal": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/video-horizontal.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: video-horizontal");
    return r.json();
  }),
  "video-octagon": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/video-octagon.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: video-octagon");
    return r.json();
  }),
  "video-play": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/video-play.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: video-play");
    return r.json();
  }),
  "video-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/video-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: video-remove");
    return r.json();
  }),
  "video-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/video-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: video-slash");
    return r.json();
  }),
  "video-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/video-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: video-square");
    return r.json();
  }),
  "video-tick": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/video-tick.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: video-tick");
    return r.json();
  }),
  "video-time": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/video-time.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: video-time");
    return r.json();
  }),
  "video-vertical": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/video-vertical.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: video-vertical");
    return r.json();
  }),
  "video": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/video.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: video");
    return r.json();
  }),
  "voice-circle": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/voice-circle.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: voice-circle");
    return r.json();
  }),
  "voice-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/voice-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: voice-square");
    return r.json();
  }),
  "volume-cross": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/volume-cross.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: volume-cross");
    return r.json();
  }),
  "volume-high": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/volume-high.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: volume-high");
    return r.json();
  }),
  "volume-low-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/volume-low-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: volume-low-2");
    return r.json();
  }),
  "volume-low": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/volume-low.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: volume-low");
    return r.json();
  }),
  "volume-mute": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/volume-mute.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: volume-mute");
    return r.json();
  }),
  "volume-slash": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/volume-slash.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: volume-slash");
    return r.json();
  }),
  "volume-up": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/volume-up.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: volume-up");
    return r.json();
  }),
  "vuesax": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/vuesax.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: vuesax");
    return r.json();
  }),
  "wallet-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wallet-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wallet-2");
    return r.json();
  }),
  "wallet-3": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wallet-3.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wallet-3");
    return r.json();
  }),
  "wallet-4": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wallet-4.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wallet-4");
    return r.json();
  }),
  "wallet-add-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wallet-add-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wallet-add-2");
    return r.json();
  }),
  "wallet-add": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wallet-add.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wallet-add");
    return r.json();
  }),
  "wallet-check": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wallet-check.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wallet-check");
    return r.json();
  }),
  "wallet-minus": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wallet-minus.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wallet-minus");
    return r.json();
  }),
  "wallet-money": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wallet-money.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wallet-money");
    return r.json();
  }),
  "wallet-remove": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wallet-remove.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wallet-remove");
    return r.json();
  }),
  "wallet-search": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wallet-search.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wallet-search");
    return r.json();
  }),
  "wallet": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wallet.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wallet");
    return r.json();
  }),
  "wanchain-(wan)-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wanchain-(wan)-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wanchain-(wan)-2");
    return r.json();
  }),
  "wanchain-(wan)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wanchain-(wan).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wanchain-(wan)");
    return r.json();
  }),
  "warning-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/warning-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: warning-2");
    return r.json();
  }),
  "watch-status": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/watch-status.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: watch-status");
    return r.json();
  }),
  "watch": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/watch.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: watch");
    return r.json();
  }),
  "weight": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/weight.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: weight");
    return r.json();
  }),
  "whatsapp": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/whatsapp.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: whatsapp");
    return r.json();
  }),
  "wifi-square": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wifi-square.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wifi-square");
    return r.json();
  }),
  "wifi": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wifi.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wifi");
    return r.json();
  }),
  "wind-2": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wind-2.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wind-2");
    return r.json();
  }),
  "wind": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wind.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wind");
    return r.json();
  }),
  "windows": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/windows.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: windows");
    return r.json();
  }),
  "wing-wing": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/wing-wing.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: wing-wing");
    return r.json();
  }),
  "woman": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/woman.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: woman");
    return r.json();
  }),
  "xd": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/xd.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: xd");
    return r.json();
  }),
  "xiaomi": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/xiaomi.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: xiaomi");
    return r.json();
  }),
  "xrp-(xrp)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/xrp-(xrp).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: xrp-(xrp)");
    return r.json();
  }),
  "youtube": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/youtube.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: youtube");
    return r.json();
  }),
  "zel-(zel)": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/zel-(zel).json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: zel-(zel)");
    return r.json();
  }),
  "zoom": () => fetch("https://icontree.cosmoscope.workers.dev/icon/use/zoom.json").then((r) => {
    if (!r.ok) throw new Error("Failed to fetch icon: zoom");
    return r.json();
  })
};

// src/recolor.ts
function hexToRgba(hex) {
  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  return [
    parseInt(h.substring(0, 2), 16) / 255,
    parseInt(h.substring(2, 4), 16) / 255,
    parseInt(h.substring(4, 6), 16) / 255,
    1
  ];
}
function recolorLayer(layer, colorArray) {
  if (layer.layers) {
    for (const sub of layer.layers) {
      recolorLayer(sub, colorArray);
    }
  }
  if (layer.shapes) {
    for (const shape of layer.shapes) {
      recolorShape(shape, colorArray);
    }
  }
}
function recolorShape(shape, colorArray) {
  if ((shape.ty === "fl" || shape.ty === "st") && shape.c?.k) {
    shape.c.k = colorArray;
  }
  if (shape.it) {
    for (const child of shape.it) {
      recolorShape(child, colorArray);
    }
  }
}
function recolorLottie(json, color) {
  const clone = JSON.parse(JSON.stringify(json));
  const colorArray = hexToRgba(color);
  if (clone.layers) {
    for (const layer of clone.layers) {
      recolorLayer(layer, colorArray);
    }
  }
  return clone;
}
var memoCache = /* @__PURE__ */ new Map();
function getRecoloredLottie(iconId, json, color) {
  const key = `${iconId}-${color}`;
  const cached = memoCache.get(key);
  if (cached) return cached;
  const result = recolorLottie(json, color);
  memoCache.set(key, result);
  return result;
}

// src/Icon.tsx
var FALLBACK_COLOR = "#000000";
function useLatestRef(value) {
  const ref = React.useRef(value);
  ref.current = value;
  return ref;
}
function Icon({
  id,
  size = 24,
  color = "currentColor",
  mode = "static",
  onClick,
  resetAfterPlay = true,
  className,
  style
}) {
  const resolvedColor = color === "currentColor" ? FALLBACK_COLOR : color;
  const rawJsonRef = React.useRef(null);
  const [jsonReady, setJsonReady] = React.useState(false);
  const [lottieInit, setLottieInit] = React.useState(false);
  const resetAfterPlayRef = useLatestRef(resetAfterPlay);
  const modeRef = useLatestRef(mode);
  React.useEffect(() => {
    let cancelled = false;
    rawJsonRef.current = null;
    setJsonReady(false);
    const load = registry[id];
    if (typeof load !== "function") {
      return;
    }
    load().then((json) => {
      if (!cancelled) {
        const data = json.default ?? json;
        rawJsonRef.current = data;
        setJsonReady(true);
      }
    }).catch(() => {
      if (!cancelled) {
        rawJsonRef.current = null;
      }
    });
    return () => {
      cancelled = true;
    };
  }, [id]);
  const animationData = React.useMemo(() => {
    if (!rawJsonRef.current) return null;
    return getRecoloredLottie(id, rawJsonRef.current, resolvedColor);
  }, [id, resolvedColor, jsonReady]);
  const { View, animationItem } = useLottie(
    {
      animationData: animationData ?? void 0,
      autoplay: false,
      loop: false,
      onDOMLoaded: () => setLottieInit(true),
      onComplete: () => {
        if (resetAfterPlayRef.current) {
          animationItem?.goToAndStop(0, true);
        }
      }
    }
  );
  const animRef = useLatestRef(animationItem);
  React.useEffect(() => {
    const item = animRef.current;
    if (!lottieInit || !item) return;
    if (modeRef.current === "loop") {
      item.loop = true;
      item.play();
    } else {
      item.loop = false;
      item.goToAndStop(0, true);
    }
  }, [lottieInit, mode]);
  const handleClick = React.useCallback(() => {
    if (modeRef.current === "onClick") {
      animRef.current?.goToAndPlay(0, true);
      onClick?.();
    }
  }, [mode, onClick]);
  const handleMouseEnter = React.useCallback(() => {
    if (modeRef.current === "hover") {
      animRef.current?.goToAndPlay(0, true);
    }
  }, [mode]);
  if (!animationData) return null;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className,
      style: {
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 0,
        ...style
      },
      onClick: handleClick,
      onMouseEnter: handleMouseEnter
    },
    View
  );
}
export {
  Icon,
  Icon as default,
  getRecoloredLottie,
  recolorLottie
};
