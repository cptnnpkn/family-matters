---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Fzeg"]
---
# [Fzeg](3-Mechanics\CLI\bestiary\monstrosity/fzeg-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 80*  

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
"name": "Fzeg (GHLoE)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "15"
- !!int "18"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "7"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "7"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "any four languages"
"cr": "16"
"traits":
- "desc": "The fzeg has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- "desc": "If the fzeg fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "When the fzeg reduces a creature to 0 hit points with a melee attack on\
    \ its turn, the fzeg can take a bonus action to move up to half its speed and\
    \ make a bite attack."
  "name": "Rampage"
- "desc": "The fzeg regains 20 hit points at the start of its turn if it has at least\
    \ 1 hit point. If the fzeg takes radiant damage, this trait doesn't function at\
    \ the start of the fzeg's next turn."
  "name": "Regeneration"
- "desc": "The fzeg can use its action to polymorph into a Small or Medium humanoid\
    \ or back into its true form, that of a wolfhumanoid hybrid. It can transform\
    \ its body parts as part of attacking with them and can choose whether the change\
    \ remains after making the attack. Other than its size, its statistics are the\
    \ same in each form. Any equipment it's wearing or carrying isn't transformed.\
    \ It reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "The fzeg can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "The fzeg uses its howl, then attacks once with its bite and twice with\
    \ its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 11\
    \ (2d6 + 4) piercing damage plus 17 (5d6) necrotic damage and is [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)\
    \ until the end of its next turn. A humanoid slain after being bitten rises the\
    \ following night as a fzeglaich under the fzeg's control."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13\
    \ (2d8 + 4) slashing damage."
  "name": "Claws"
- "desc": "Each creature of the fzeg's choice that is within 300 feet of the fzeg\
    \ and able to hear it must succeed on a DC 17 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the fzeg's\
    \ Howl for the next 24 hours or until it is [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)\
    \ by the fzeg."
  "name": "Howl"
- "desc": "The fzeg magically calls eight wolves. These wolves arrive in 2 rounds,\
    \ acting as allies of the fzeg and obeying its spoken commands. The beasts remain\
    \ for 1 hour, until the fzeg dies, or until the fzeg dismisses them as a bonus\
    \ action."
  "name": "Night Children (Recharges after a Short or Long Rest)"
"legendary_actions":
- "desc": "The fzeg moves up to its speed without provoking opportunity attacks."
  "name": "Move"
- "desc": "The fzeg attacks with its claws."
  "name": "Claws"
- "desc": "The fzeg chooses one creature that is of a lower Challenge, has a bite\
    \ attack, and is within 60 feet of the fzeg. Provided the target can see or hear\
    \ the fzeg, that creature can use its reaction to move up to half its speed and\
    \ make a bite attack."
  "name": "Incite"
- "desc": "The fzeg attacks with its bite."
  "name": "Bite (Costs 2 Actions)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/fzeg-ghloe.webp"
```
^statblock