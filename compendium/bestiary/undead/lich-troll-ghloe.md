---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Lich Troll"]
---
# [Lich Troll](3-Mechanics\CLI\bestiary\undead/lich-troll-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 121*  

> [!quote]-  
> 
> Running away from a troll is smart. Running away from a troll that casts spells is wishful thinking.

## Salvage

Someone who has proficiency with jeweler's tools or woodcarver's tools can fashion the skull of a lich troll into a ring of regeneration. Doing so takes materials worth 5,000 gp, 10 days of work, and a successful DC 15 Intelligence or Wisdom check. Somebody must also cast greater restoration on the ring each day during the process. If the ring's wearer dies while wearing the ring, the soul of the lich has a 25 percent chance to take over the corpse and use it as a new body. But if the ring is created entirely in the area of a hallow spell with the everlasting rest effect, the tie to the lich's soul is broken

## Lore

- **DC 15 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** The lich troll is remnants of early attempts of powerful spellcasters to transfer their souls into trolls.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** The lich troll is immune to poison and resistant to necrotic damage. It regenerates and can be killed only by acid, fire, or radiant damage  

```statblock
"name": "Lich Troll (GHLoE)"
"size": "Large"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "133"
"hit_dice": "14d10 + 56"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "15"
- !!int "13"
- !!int "12"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
  "Constitution": !!int "9"
"damage_resistances": "cold, necrotic"
"damage_immunities": "fire, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 60 ft., passive Perception 16"
"languages": "the languages it knew in life and Giant"
"cr": "14"
"traits":
- "desc": "The lich troll is an 11th-level spellcaster. Its spellcasting ability is\
    \ Intelligence (spell save DC 15, +7 to hit with spell attacks). The lich troll\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [chill\
    \ touch](/3-Mechanics/CLI/spells/chill-touch.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md),\
    \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md), [ray of frost](/3-Mechanics/CLI/spells/ray-of-frost.md)\n\
    \n1st level (4 slots): [detect magic](/3-Mechanics/CLI/spells/detect-magic.md),\
    \ [magic missile](/3-Mechanics/CLI/spells/magic-missile.md), [shield](/3-Mechanics/CLI/spells/shield.md),\
    \ [thunderwave](/3-Mechanics/CLI/spells/thunderwave.md)\n\n2nd level (3 slots):\
    \ [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md), [invisibility](/3-Mechanics/CLI/spells/invisibility.md),\
    \ [mirror image](/3-Mechanics/CLI/spells/mirror-image.md), [misty step](/3-Mechanics/CLI/spells/misty-step.md)\n\
    \n3rd level (3 slots): [animate dead](/3-Mechanics/CLI/spells/animate-dead.md),\
    \ [counterspell](/3-Mechanics/CLI/spells/counterspell.md), [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md),\
    \ [haste](/3-Mechanics/CLI/spells/haste.md)\n\n4th level (3 slots): [blight](/3-Mechanics/CLI/spells/blight.md),\
    \ [dimension door](/3-Mechanics/CLI/spells/dimension-door.md)\n\n5th level (2\
    \ slots): [cloudkill](/3-Mechanics/CLI/spells/cloudkill.md), [scrying](/3-Mechanics/CLI/spells/scrying.md)\n\
    \n6th level (1 slots): [create undead](/3-Mechanics/CLI/spells/create-undead.md)"
  "name": "Spellcasting"
- "desc": "If the lich troll fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- "desc": "The lich troll regains 15 hit points at the start of its turn. If the lich\
    \ troll takes acid or radiant damage, this trait doesn't function until the start\
    \ of the lich troll's next turn. The lich troll dies only if it starts its turn\
    \ with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "The lich troll makes two claw attacks. Alternately, the lich troll can\
    \ cast [chill touch](/3-Mechanics/CLI/spells/chill-touch.md) or ray of frost twice."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 11\
    \ (2d6 + 4) slashing damage plus 7 (2d6) cold damage."
  "name": "Claw"
"legendary_actions":
- "desc": "The lich troll casts a cantrip."
  "name": "Cantrip"
- "desc": "The lich troll makes a claw attack."
  "name": "Claw"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/undead/token/lich-troll-ghloe.webp"
```
^statblock