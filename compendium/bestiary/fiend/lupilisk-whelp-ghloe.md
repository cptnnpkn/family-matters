---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
aliases: ["Lupilisk Whelp"]
---
# [Lupilisk Whelp](3-Mechanics\CLI\bestiary\fiend/lupilisk-whelp-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 62*  

> [!quote]-  
> 
> If you find a statue in the wild with its mouth open in a scream, flee. Best case, it's an artist working out their twisted ideas. Worst case, you'll be a statue soon.

## Salvage

Someone who has proficiency with alchemist's supplies can take four lupilisk venom fangs, or just the two fangs of one lupilisk elder, and treat them with reagents worth 250 gp per tooth for 3 days. A successful treatment requires the alchemist to succeed on a DC 15 Intelligence or Wisdom check. During the treatment time, somebody must also cast lesser restoration on the fangs. After a successful treatment, someone who has proficiency with jeweler's tools can fashion the fangs, now blackened, into a necklace, creating a periapt of proof against poison. If the wearer attunes to the periapt, the amulet also provides that wearer immunity to being petrified.

## Lore

- **DC 10 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** A lupilisk's bite imparts a petrifying venom to prey. This magic toxin grows more potent as the lupilisk ages.  
- **DC 15 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** Lupilisks live in packs with an elder couple in the lead. This couple are the parents of most other pack members.  

```statblock
"name": "Lupilisk Whelp (GHLoE)"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_resistances": "cold, fire"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "can learn languages but can't speak"
"cr": "1"
"traits":
- "desc": "The lupilisk whelp has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- "desc": "The lupilisk whelp has advantage on an attack roll against a creature if\
    \ at least one of the lupilisk's allies is within 5 feet of the creature and the\
    \ ally isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) piercing damage and 5 (2d4) poison damage. If the target is a creature,\
    \ it must succeed on a DC 11 Constitution saving throw or become [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ and [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained) while [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ in this way. The creature must repeat the saving throw at the end of its next\
    \ turn. On a success, the effect ends. If the save fails again, the creature is\
    \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified) for 24 hours."
  "name": "Bite"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/lupilisk-whelp-ghloe.webp"
```
^statblock