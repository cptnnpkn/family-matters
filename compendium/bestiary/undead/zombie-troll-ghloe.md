---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Zombie Troll"]
---
# [Zombie Troll](3-Mechanics\CLI\bestiary\undead/zombie-troll-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 121*  

> [!quote]-  
> 
> Running away from a troll is smart. Running away from a troll that casts spells is wishful thinking.

## Salvage

Someone who has proficiency with jeweler's tools or woodcarver's tools can fashion the skull of a lich troll into a ring of regeneration. Doing so takes materials worth 5,000 gp, 10 days of work, and a successful DC 15 Intelligence or Wisdom check. Somebody must also cast greater restoration on the ring each day during the process. If the ring's wearer dies while wearing the ring, the soul of the lich has a 25 percent chance to take over the corpse and use it as a new body. But if the ring is created entirely in the area of a hallow spell with the everlasting rest effect, the tie to the lich's soul is broken.

## Lore

- **DC 15 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** The lich troll is remnants of early attempts of powerful spellcasters to transfer their souls into trolls.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** The lich troll is immune to poison and resistant to necrotic damage. It regenerates and can be killed only by acid, fire, or radiant damage.  

```statblock
"name": "Zombie Troll (GHLoE)"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor, [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "85"
"hit_dice": "9d10 + 36"
"stats":
- !!int "19"
- !!int "6"
- !!int "18"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "30 ft."
"damage_resistances": "cold, necrotic"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Giant but can't speak"
"cr": "4"
"traits":
- "desc": "The zombie troll regains 10 hit points at the start of its turn. If the\
    \ zombie troll takes acid or radiant damage, this trait doesn't function at the\
    \ start of the zombie troll's next turn. The zombie troll dies only if it starts\
    \ its turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "The zombie troll makes two attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13\
    \ (2d8 + 4) bludgeoning damage."
  "name": "Morningstar"
- "desc": "If a creature is hit by both morningstar attacks, the creature must take\
    \ a DC 14 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Unrelenting Brute"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/undead/token/zombie-troll-ghloe.webp"
```
^statblock