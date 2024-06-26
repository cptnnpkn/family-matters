---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Skinweaver"]
---
# [Skinweaver](3-Mechanics\CLI\bestiary\npc/skinweaver-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 30*  

> [!quote]-  
> 
> I don't brook with tanners no longer. If ya' know what's good for you, ya' won't ask me why.

## Salvage

Skinweavers collect valuable artwork and other items that display their erudition and refinement. They're never without their custom-made suits of bespoke leather armor. This leather is so finely crafted that a suit of armor stitched from a skinweaver's own suit is better than almost any other tanner's creations.

If a proficient armorer or leather worker uses a skinweaver's suit to create a humanoid suit of light armor and succeeds on a successful DC 15 Dexterity ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)) check, the armor acts as [+1 leather armor](/3-Mechanics/CLI/items/1-armor.md) and can be donned or doffed as a standard action. This process takes 24 hours and requires 250 gp of other components.

## Lore

- **DC 10 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** A skinweaver is resistant to fire damage because of its leathery skin and armor.  
- **DC 15 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** A skinweaver's terrifying appearance can scare an opponent multiple times in the same fight.  

```statblock
"name": "Skinweaver (GHLoE)"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural & tailored leather"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"stats":
- !!int "12"
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "18"
"speed": "30 ft., climb 15 ft."
"skillsaves":
  "Stealth": !!int "4"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any three languages"
"cr": "3"
"traits":
- "desc": "Skinweaver's tanning knives overcome slashing damage resistance (though\
    \ not immunity)."
  "name": "Supernaturally Sharp"
- "desc": "Any humanoid that starts its turn within 30 feet of the skinweaver and\
    \ can see it must make a DC 11 Wisdom saving throw. On a failed save, the creature\
    \ is [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened) until the end\
    \ of the creature's next turn). Whether a creature succeeds or fails, it cannot\
    \ be affected by this ability again until it loses sight of the skinweaver (as\
    \ when the skinweaver moves behind total cover or successfully hides)."
  "name": "Shocking Visage"
"actions":
- "desc": "The skinweaver makes two tanning knife attacks or one tanning knife and\
    \ one web whip attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11\
    \ (2d8 + 2) slashing damage."
  "name": "Tanning Knife"
- "desc": "Ranged Weapon Attack: Attack: +4 to hit, reach 25 ft., one target.\
    \ Hit: 7 (2d4 + 2) piercing damage, and the target is pulled up to 20 feet\
    \ toward the skinweaver."
  "name": "Web Whip"
- "desc": "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one creature. Hit:\
    \ The target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ by leathery webbing. As an action, the [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ target can attempt a DC 13 Strength check, bursting the webbing on a success.\
    \ The webbing can also be attacked and destroyed (AC 10; hp 10; vulnerability\
    \ to slashing damage; immunity to bludgeoning, poison, and psychic damage)."
  "name": "Web Net (Recharge 5-6)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/npc/token/skinweaver-ghloe.webp"
```
^statblock