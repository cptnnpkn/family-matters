---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Fzeglaich"]
---
# [Fzeglaich](3-Mechanics\CLI\bestiary\monstrosity/fzeglaich-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 79*  

> [!quote]-  
> 
> We've been led to believe that vampires and werewolves are natural enemies. Convenient that two fearsome creatures would be so opposed to the other. Never did we imagine, nor prepare, for a time when they might unite.

## Salvage

Someone who has proficiency with alchemist's supplies can use 1 pint of blood from a fzeg and mix it with silver and other reagents worth 50 gp to create a [lycanthropy antidote](/3-Mechanics/CLI/items/lycanthropy-antidote-ghloe.md) (see Appendix A of Lairs of Etharis). A slain fzeg has 10 (`1d4 + 2`) usable pints of blood. The blood of a fzeglaich can be used, but it takes five times as much blood and twice as long to brew. Creating the antidote takes 4 hours of work and a successful DC 15 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)) check.

## Lore

- **DC 10 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** A fzeg is a mix of werewolf and vampire but has fewer weaknesses. The creature is resistant to nonmagical attacks.  
- **DC 15 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** With its bite, a fzeg can drain life force and curse a person with werewolf lycanthropy. Someone who dies from a fzeg's bite becomes a fzeglaich, a creature like the fzeg and loyal to it.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** A fzeg can transform into humanoid form. It's natural form, however, is that of a wolf-human hybrid. This vampiric monster isn't vulnerable to sunlight, but radiant damage prevents it from regenerating.  

> [!note] GM Advice
> 
> An ambitious DM could imagine a fzeg at the lead of a force including other werewolf-undead hybrids. Combined with a ghoul or ghast, the creature would paralyze, or combined with a wight, it would drain the life and lower the maximum hit points of a target. Similarly, other kinds of lycanthropes could become undead and wield hybrid powers.
^gm-advice

```statblock
"name": "Fzeglaich (GHLoE)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "11"
- !!int "12"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "3"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "one language"
"cr": "7"
"traits":
- "desc": "The fzeglaich has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- "desc": "When the fzeglaich reduces a creature to 0 hit points with a melee attack\
    \ on its turn, the fzeglaich can take a bonus action to move up to half its speed\
    \ and make a bite attack."
  "name": "Rampage"
- "desc": "The fzeglaich regains 10 hit points at the start of its turn if it has\
    \ at least 1 hit point. If the fzeglaich takes radiant damage, this trait doesn't\
    \ function at the start of the fzeglaich's next turn."
  "name": "Regeneration"
"actions":
- "desc": "The fzeglaich makes two attacks, only one of which can be a bite."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 7\
    \ (1d8 + 3) piercing damage plus 7 (2d6) necrotic damage, and the target must\
    \ succeed on a DC 14 Constitution saving throw or be [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ until the end of its next turn. The fzeglaich regains hit points equal to the\
    \ amount of necrotic damage dealt."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8\
    \ (2d4 + 3) slashing damage."
  "name": "Claws"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/fzeglaich-ghloe.webp"
```
^statblock