---
title: 'CB Flow Part 3: Real-Time Data, Accessory Setup'
template: wiki
smls_language: en
smls_translations:
    vi: /vi/wiki/cong-cu-modding/gun-data-editor/huong-dan-tung-buoc/data-thoi-gian-thuc-cai-dat-phu-kien
previous: /en/wiki/modding-tools/gun-data-editor/step-by-step-guide/export-import-basic-data-setup
---

## 1. Overview

Following the steps in [Part 1](/en/wiki/modding-tools/gun-data-editor/step-by-step-guide/prepare-key-assets) and [Part 2](/en/wiki/modding-tools/gun-data-editor/step-by-step-guide/export-import-basic-data-setup), we move on to Part 3 of bringing a gun model into the game via the code-based flow. In this part, you'll adjust the gun's data in real time inside the GDE environment, covering:

1. The key anchor points.
2. Configuring accessories based on the mount system.
3. Saving the data (.dat) and exporting the package file (.pak).

## 2. Declaring the configuration

Find the asset element named **_Config** in the asset list and open it — you can adjust a few options here:

```cpp
bool officialGun = false;
// Defaults to 'false' since your gun isn't one of the official weapons provided by the dev team

bool exportAsPack = true;
// You can have multiple guns in GDE and bundle them into a single pack once done
// Setting this to TRUE makes GDE save the data for the whole pack instead of a single gun

Str packName = "your_pack_name";
// Used when 'exportAsPack' above is TRUE
// Naming rule: no spaces, no uppercase letters

/******************************************************************************/
// Register each gun in your pack here
// Registered guns will show up in GDE's list
void Register_Guns()
{
    Register_Gun(/*Drag the object element for the CB Gun model here/*);

    // You can copy the 'Register_Gun()' function above as many times as needed
    // one call per gun

    Set_Working_Model("your_gun_code");
    // Enter the gun code of the weapon you want to appear first when GDE starts up
    // You must enter a gun code here — this function cannot be left empty.
}
```

Drag the object element named "CB Gun - AKM" from the element list **inside the parentheses** of the `Register_Gun()` function, and enter `akm_tut` into the `Set_Workking_Model()` function so it becomes `Set_Working_Model("akm_tut");`

## 3. Launching GDE

Press Play to have the Engine launch GDE — the first run will take a bit of time for GDE to be compiled by the engine. If you're not yet familiar with GDE, check out [Gun Data Editor Interface](https://wikivi.cscdvmp.com/gun-data-editor/giao-dien-gun-data-editor).

We'll now start adjusting the data for the weapon declared in the step above (AKM).

### 3.1 Anchor points

Unlike the data you've entered by hand so far, these anchor points are local coordinates relative to the gun model's origin and orientation. Calculations for events such as firing or hitting an obstacle are based on these points.

> [!NOTE]
> For detailed information on anchor points, see [Gun Data Structure](/en/wiki/modding-tools/gun-data-editor/reference/gun-data-structure).
