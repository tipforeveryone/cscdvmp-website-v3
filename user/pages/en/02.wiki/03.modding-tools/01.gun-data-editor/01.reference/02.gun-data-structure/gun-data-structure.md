---
title: Gun Data Structure
template: wiki
smls_language: en
smls_translations:
    vi: /vi/wiki/cong-cu-modding/gun-data-editor/tham-khao/cau-truc-gun-data
---

## 1. Introduction

**Gun Data** is the set of parameters (data, for short) for a gun, packaged by GDE into a single data file (gunname.dat). This file is used by both the main game and GDE itself.

Data is prepared in 2 ways:

1. **Manual entry** into objects inside the Titan Engine Model Editor. These are parameters that rarely change, such as the gun's name, how it operates, technical specs, muzzle velocity, rate of fire, etc.
2. **Real-time entry**: for parameters that are estimation-based and need adjusting to find the best result, such as shell-ejection direction, the gun body's sensor, mount/attachment layout, etc.

---

## 2. Manually entered data

The places where data is entered are scattered across many objects, connected through parent-child relationships. Refer to the diagram below to quickly grasp the object structure that holds manually entered data.

<a href="https://i.gyazo.com/3cf421e764b28a53906132a7714f970b.jpg" target="_blank" rel="noopener"><img src="https://i.gyazo.com/3cf421e764b28a53906132a7714f970b.jpg" alt="" loading="lazy"></a>

### 2.1 CB Gun Model

The weapon model imported into GDE, named `body`, belonging to `OBJ_GUN`, includes these data groups:

- [AB flow group](#ab-flow-group)
- [Basic parameters group](#basic-parameters)
- [Basic info group](#basic-info)
- [CB flow group](#cb-flow-group)
- [Fire mode group](#fire-mode-group)
- [Other data](#other-data)

<a href="https://i.gyazo.com/1a4d6613b29f1590f83c0e2f16ccc147.jpg" target="_blank" rel="noopener"><img src="https://i.gyazo.com/1a4d6613b29f1590f83c0e2f16ccc147.jpg" alt="" loading="lazy"></a>

<h4 id="ab-flow-group">2.1.1 AB flow group</h4>

> [!NOTE]
> Can be left blank if the gun doesn't use the AB flow

| | |
|---|---|
| anim base gun | UID of the **AB Gun** model object |
| anim base hand | UID of the **AB Hand** model object |
| anim base sound | UID of the sound file used for the AB flow (*not currently used*) |

<h4 id="basic-parameters">2.1.2 Basic parameters group</h4>

| | |
|---|---|
| attr cost | The gun's price, in in-game Credits |
| attr damage scale | - Scales damage per shot; the higher the value, the more damage is multiplied.<br>- Default is 1, equivalent to the AK47's damage<br>- If set to 2, this gun's damage will be double the AK47's |
| attr draw delay | - Time to draw the weapon (ms) when using the CB flow<br>- With the AB flow, draw time depends on the length of the `weapon-in` animation instead |
| attr muzzle velocity | - Muzzle velocity (m/s).<br>- Recommended to use the gun's real-world value, e.g. the AK47 is 715 m/s |
| attr rate of fire | - Rate of fire (rpm)<br>- Recommended to use the gun's real-world value, e.g. the AK is 600 rounds/min |
| attr recoil | - **Base** recoil; this value is affected by several other factors to produce the gun's final in-game recoil<br>- Default is 0.07<br>- The higher the number, the more the gun kicks |
| attr recover time | - Time for the gun to return to its original position after each shot (ms)<br>- Default is 80ms, a figure that suits most gun types. |

<h4 id="basic-info">2.1.3 Basic info group</h4>

| | |
|---|---|
| basic author | Author's name (optional) |
| basic gun code | - This is a **required** field. Must be **unique**.<br>- Lowercase letters, no spaces. E.g. `ak47` (correct), `ak 47` (incorrect)<br>- Usually kept short and based on the gun's name, like `ak47`, `m4a1`, `mp5a3`, etc., or `what_ever`, `myrandom_gun`, etc. |
| basic intro en | The English description |
| basic intro vi | The Vietnamese description |
| basic name en | English name, e.g. AK-47, FN-2000, etc. |
| basic name vn | Vietnamese name (usually the same as the English one) |
| basic version | Current version (optional) |

<h4 id="cb-flow-group">2.1.4 CB flow group</h4>

> [!WARNING]
> This data group is required

| | |
|---|---|
| code base gun anim | UID of the **CB Gun**'s animation object |
| code base hand anim | UID of the **CB Hand**'s animation object |
| code base reload duration | Duration of **CB Gun**'s reload (the **CB Gun** model is hidden from view during reload) |
| code base sound | UID of the **CBG**'s sound object |

<h4 id="fire-mode-group">2.1.5 Fire mode group</h4>

| | |
|---|---|
| firemode burst double | Double-fire mode (e.g. AN94) |
| firemode burst triple | 3-round burst mode |
| firemode full auto | Full automatic mode |
| firemode single delay | Delay between 2 semi-auto shots (ms), used to limit players from clicking/firing rapidly with high-recoil guns like sniper rifles |

<h4 id="other-data">2.1.6 Other data</h4>

| | |
|---|---|
| gun built in suppressor | Marked if the gun has a built-in suppressor (e.g. MP5SD) |
| gun mag object | UID of the magazine object. |
| gun max shell | Max number of rounds a single-load gun can hold, not counting the one already chambered. |
| gun mechanic operation | The gun's operating mechanism:<br>- Bolt action (`OPERATION_BOLT`)<br>- Gas operation (`OPERATION_GAS`)<br>- Pump action (`OPERATION_PUMP`)<br>- Locked back action (`OPERATION_PISTOL`) |
| gun mechanic reload | The gun's reload mechanism:<br>- Single insert (`RELOAD_SINGLE_INSERT`)<br>- Magazine swap (`RELOAD_MAGAZINE`)<br>- Stripper clip (`RELOAD_STRIPPER_CLIP`) |
| gun separated sight | Marked if the gun has a detachable ironsight — a gun whose ironsight mesh (rear sight and front sight) is attached to the CB Gun mesh; the ironsight mesh is hidden when an optical scope attachment is mounted. |
| gun thumbnail image | UID of the gun's thumbnail image object |
| gun type | The gun's category:<br>- Assault rifle (`GUNTYPE_ASSAULT_RIFLE`)<br>- Submachine gun (`GUNTYPE_SMG`)<br>- Pistol (`GUNTYPE_PISTOL`)<br>- Sniper rifle (`GUNTYPE_SNIPER_RIFLE`)<br>- Shotgun (`GUNTYPE_SHOTGUN`)<br>- Light machine gun (`GUNTYPE_LMG`)<br>- Cornershot (`GUNTYPE_CORNERSHOT`) |
| gun viewoffset | - The gun's offset while not aiming<br>- Default is `(0, 0, 0.13)`, and is kept nearly the same for every gun |

### 2.2 Objects belonging to the AB flow

This section covers deeper-level objects, referenced in [2.1.1 AB flow group](#ab-flow-group)

Both the **AB Hand** and **AB Gun** models each have their own inner object that holds a set of animations, called the Animation set object (`OBJ_ANIM_BASE_GUN_ANIM`). Each slot corresponds to one animation, divided into groups:

- **Magazine**-related group: magin, magin-dry, magout, magout-boltlock
- **Mount** pose group: mounted, mounted-fire, mounted-fire-dry, mounted-fire-dry-boltlock
- **Normal** pose group: normal, normal-fire, normal-fire-dry, normal-fire-dry-boltlock
- **Reload** group: reload, reload-dry, reload-fast, reload-fast-dry
- Other animations: weapon-deploy, weapon-in, weapon-inspect, weapon-out

<a href="https://i.gyazo.com/7f2cf696340f23bcb8e0619dc80f7dbe.jpg" target="_blank" rel="noopener"><img src="https://i.gyazo.com/7f2cf696340f23bcb8e0619dc80f7dbe.jpg" alt="" style="max-width:400px;width:100%;height:auto;" loading="lazy"></a>

> [!TIP]
> See [AB Flow Animation List](/en/wiki/modding-tools/gun-data-editor/reference/ab-animation-list) for a more detailed description of each animation

### 2.3 Objects belonging to the CB flow

**Animation set**

- For **CB Hand**: mounted, normal, normal-left, shield
- For **CB Gun**: dry, original, shoot

> [!TIP]
> See [Code-based and Animation-based Concepts](/en/wiki/modding-tools/gun-data-editor/reference/code-based-and-animation-based) for more information on these animations

**Sound set**

This object holds a set of sound files with different priority levels that can fall back to each other following the rule: Outdoor > Indoor | 1p > 3p | normal > suppressed

Priority/fallback example: if the indoor sound **hasn't been prepared**, the system will use the outdoor sound as a **fallback**.

For the **normal > suppressed** pair specifically, even though the priority mechanism applies, since suppressed is a distinct sound type it's recommended to prepare it separately, to avoid a suppressed weapon playing unsuppressed gunfire before a suppressor is attached.

List of sound slots in the sound set (their purpose matches their name), where 1p is gunfire for the first-person view and 3p is for the third-person view.

- 1p fire indoor normal
- 1p fire indoor suppressed
- 1p fire outdoor normal
- 1p fire outdoor suppressed
- 3p fire indoor normal
- 3p fire indoor suppressed
- 3p fire outdoor normal
- 3p fire outdoor suppressed
- mag in: inserting the magazine into the gun
- mag out: removing the magazine from the gun
- reload finish: usually the sound of racking the bolt

### 2.4 Magazine model and thumbnail

- Some weapons don't use a magazine, but still have an object holding magazine information.
- The gun's thumbnail and preparation steps are covered in the corresponding tutorial.

---

## 3. Real-time entered data

This data isn't set by filling in an object's input fields, but is adjusted directly in GDE's viewport. These are all parameters that are hard to estimate and need to be adjusted while observing, split into 2 groups:

### 3.1 Anchor positions on the gun

> [!NOTE]
> The CB and AB columns in the table mean "the parameter is used in…"

| **Data point** | **Role** | **CB** | **AB** |
|---|---|---|---|
| Magazine position (magPos) | Where the detachable magazine model is placed on the gun. | x | |
| Muzzle (muzzlePos) | The muzzle reference point, used as the origin for effects and projectile spawning | x | x |
| Buttstock (buttPos) | The buttstock reference point at the rear of the gun, used to determine the gun's physical length | x | |
| Shell position (shellPos) | Where the shell casing appears when firing | x | x |
| Shell eject direction (shellEjectDirPos) | The direction the shell casing flies toward | x | x |
| Sensor (sensorBase, sensorSize) | Used for the game's mount and block mechanics | x | |
| AB Gun offset (animBaseGunOffset) | Offset of the **AB Gun** model relative to the **CB Gun** model | | x |
| AB Hand offset (animBaseHandOffset) | Offset of the **AB Hand** model relative to the **AB Gun** model | | x |

### 3.2 Attachment position and type per mount slot

| **Data point** | **Role** |
|---|---|
| Mount type (Optic/Barrel/Muzzle) | Determines which attachment group is compatible with, and can be mounted on, that slot |
| Attachment mount position | Where the attachment sits on the gun; stored separately per CB/AB flow, since the two flows use models in different spaces |
| Mount length | Length along the mount, used as the basis for calculating the attachment's default position on that mount |
| Default position ratio | Where along the mount's length the attachment sits by default, before any further adjustment |
| Attachment rotation angle | The attachment's rotation direction around the mount axis |
| Rail position (if any) | The mounting position for the rail specifically, separate from the attachment's own mounting position |
