---
title: "Update 1.4"
date: "2026-05-01"
smls_language: en
published: true
smls_translations:
    vi: /vi/blog/cap-nhat-1-4
---

**Date:** May 1, 2026

## 1. New Features

**Detailed Operator Manager Screen**

- This screen displays detailed information for each operator in the player's roster — including personal info, rank, experience points, current status, skill progression, and a personal achievement board packed with interesting stats.
- The screen is called **"Operator Manager"**, replacing the previously barebones operator list which was shown only in the Team Roster.
- Combat record tracking for each operator has also been expanded accordingly.
- Players can access this screen directly from the squad list without leaving the battle preparation flow.
- Each operator gets their own avatar, randomly selected from a library of **32 portraits** upon creation.
- The CSCD character on the Team Roster screen now holds the weapon of the selected or currently viewed operator. The related animations are still rough around the edges but will be polished in future updates.

**Rank & Experience System**

- The operator ranking system is here! *(View the full rank list.)* An operator's rank is closely tied to the experience point (EXP) system — through combat performance after each mission, operators accumulate EXP and gradually rank up.
- In this snapshot, rank doesn't yet affect gameplay, but that changes in the next one. Specifically: **ranking up will grant operators a set number of skill points**, which players can freely allocate to directly impact each operator's combat effectiveness.

**Auto Squad Sorting**

- In the squad management screen, players can instantly re-sort team members by role with a single button. The default priority order is: **Scout → Assault → Sniper → Engineer → Combat Medic**.

**Stance Affects Aim Stability**

- Arm fatigue is significantly reduced when aiming from a **crouched position**. Combine that with careful aiming and breath control, and you'll land a much more precise shot.

## 2. Optimization & Bug Fixes

- Thanks to improvements in core processing algorithms, the game's graphical performance has seen a solid upgrade. The game is now smarter about **only rendering what the player can actually see** — objects outside the field of view or fully obscured are skipped to save processing resources, striking a better balance between CPU and GPU and resulting in a smoother experience overall.
- The same approach has been applied to the **AI and character animation systems**, allowing compute resources to be distributed more efficiently across in-game characters and reducing CPU load.
- Previously, loading a new snapshot while an old save existed on disk could cause compatibility issues and crash the game — forcing players to manually delete their old profile. This snapshot now **handles that automatically**: the game detects incompatible saves and prompts players to create a new profile, making the transition to each new version much smoother. *(This will come up often, as the game is actively in development.)*
- Several other crash-related bugs have also been identified and fixed.
