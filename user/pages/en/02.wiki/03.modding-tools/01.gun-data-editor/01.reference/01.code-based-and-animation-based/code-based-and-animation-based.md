---
title: Code-based and Animation-based Concepts
template: wiki
smls_language: en
smls_translations:
    vi: /vi/wiki/cong-cu-modding/gun-data-editor/tham-khao/code-based-va-animated-based
---

## 1. Introduction

- **Code-based (CB)** and **Animation-based (AB)** are two display processing pipelines (model/animation) for hands and guns in the FPS view.
- **GDE** is a tool that helps modders bring their weapons into the game quickly and conveniently, ensuring the requirements of both pipelines are met as accurately as possible.

---

## 2. Characteristics

- The **CB** pipeline plays a core role in making a gun function with minimal parameters.
- **CB** provides a fast workflow, at the cost of "poorer" animation compared to the AB pipeline.
- The AB pipeline, while independent, still partially depends on **CB** for its operation.
- CB can work without **AB**, but without **AB** it means missing out on the polished animations that give gunplay its real soul.
- During quick-test phases, **CB** ensures the gun functions while **AB** is an important "addition".

---

## 3. Code-based Hand/Gun (C_Hand/Gun)

- **C_Hand** is the *default* hand model, built directly into the game's package.
- **C_Gun** has 2 roles, used in the **FPS View** and as the weapon's **"World model"**.
- **C_Hand** is the parent of **C_Gun**; **C_Hand** applies the appropriate poses to match **C_Gun**'s mesh.
- All behavior of **C_Hand** and **C_Gun** is coordinated by "procedural" algorithms.

### 3.1 C_Hand Animation

- **C_Hand**'s animation is 1-frame, with 3 poses:
    - **Normal pose**
        - The right hand grips the hand grip, with the index finger resting on but not pulling the trigger.
        - The left hand grips **C_Gun**'s hand guard.
    - **Mount pose**
        - The right hand is the same as in the normal pose,
        - The left hand grips the magazine (if any) of **C_Gun**.
    - **Shield pose**: the stance used while holding a ballistic shield.

### 3.2 C_Gun Animation

- **C_Gun** has 3 animations: 2 x **1-frame** and 1 x **motion**.
    - **Original** pose: the default position.
    - **Dry** pose: the position when the bolt is locked, typically used for pistols or guns with a bolt-lock mechanism; if the **dry** pose isn't provided, **C_Gun** falls back to the **original** pose.
    - **Shoot** motion: the bolt travels a full cycle from its starting position, recoiling back to the casing-ejection position and returning.

---

## 4. Animation-based Hand/Gun (A_Hand/Gun)

- In 3D software, **A_Hand** and **A_Gun** animations are created in sync. In-game, however, the two objects are processed separately — because the attachment system needs **A_Gun** to be independent so items can be attached to it.
- In practice, **A_Hand** and **A_Gun** run 2 identical animations in parallel, creating the feeling that they're fused into one.
