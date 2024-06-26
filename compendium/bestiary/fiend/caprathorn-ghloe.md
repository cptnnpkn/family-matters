---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend
statblock: inline
aliases: ["Caprathorn"]
---
# [Caprathorn](3-Mechanics\CLI\bestiary\fiend/caprathorn-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 91*  

> [!quote]-  
> 
> The temptation to aid a lost lamb should be tamped down when a thornlamm appears. Where there is one, there are many. And all lead back to a creature far more terrifying than any big, bad wolf.

## Salvage

The sphere of annihilation a caprathorn leaves behind can be controlled and taken. At the start of each day there is a 2% chance the sphere disappears forever.

## Lore

- **DC 10 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** A caprathorn can detach a thornlamm to fight as its ally or consume one to heal.  
- **DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** The caprathorn can entomb a fallen foe and unleash a field of disintegrating force. This annihilation field recharges if a creature the caprathorn has entombed dies.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** When a caprathorn dies, it implodes into a sphere of annihilation, which pulls nearby creatures toward it.  

```statblock
"name": "Caprathorn (GHLoE)"
"size": "Huge"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "250"
"hit_dice": "20d12 + 120"
"stats":
- !!int "25"
- !!int "14"
- !!int "23"
- !!int "14"
- !!int "17"
- !!int "10"
"speed": "40 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "10"
  "Intelligence": !!int "9"
"skillsaves":
  "Perception": !!int "10"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
- "desc": "If the caprathorn moves at least 20 feet straight toward a target, and\
    \ then hits it with a gore attack on the same turn, the target takes an extra\
    \ 18 (4d8) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 22 Strength saving throw or be pushed up to 10 feet away and knocked\
    \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Charge"
- "desc": "The caprathorn implodes when it dies, leaving behind a sphere of annihilation.\
    \ Each creature within 60 feet of the caprathorn when this implosion occurs must\
    \ succeed on a DC 21 Strength saving throw or be pulled 10 feet toward the sphere."
  "name": "Implosion"
- "desc": "If the caprathorn fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The caprathorn has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The caprathorn's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "A caprathorn typically has three inanimate thornlamms (see that stat block)\
    \ attached to its horns with vines. Attached thornlamms don't take damage separately,\
    \ but whenever the caprathorn takes 50 or more damage in a single turn, one of\
    \ the attached thornlamms dies.\n\nWhile it has at least one thornlamm attached\
    \ to its vines, the caprathorn can use a bonus action to consume or detach a thornlamm.\
    \ If the caprathorn consumes a thornlamm, the caprathorn regains 21 hit points.\
    \ When the caprathorn detaches a thornlamm, that thornlamm lands in a space within\
    \ 10 feet of the caprathorn and takes a turn immediately after the caprathorn.\
    \ The thornlamm obeys the caprathorn's verbal or telepathic commands (no action\
    \ for the caprathorn). If issued no commands, the thornlamm acts independently,\
    \ often attacking a creature that isn't its ally. A thornlamm can survive indefinitely\
    \ detached from a caprathorn."
  "name": "Thornlamms"
"actions":
- "desc": "The caprathorn makes three attacks, one with its gore, one with its stomp,\
    \ and one with its thorns."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 25\
    \ (4d8 + 7) bludgeoning damage."
  "name": "Gore"
- "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 25\
    \ (4d8 + 7) bludgeoning damage."
  "name": "Stomp"
- "desc": "Melee or Ranged Weapon Attack: +14 to hit, reach 10 ft. or range 30/120\
    \ ft., one target. Hit: 21 (4d6 + 7) piercing damage. Being within 5 feet\
    \ of a hostile creature doesn't cause the caprathorn to have disadvantage on the\
    \ ranged attack roll."
  "name": "Thorns"
"legendary_actions":
- "desc": "The caprathorn makes one attack with its gore, stomp, or thorns."
  "name": "Attack"
- "desc": "The caprathorn detaches a thornlamm as per the Thornlamms trait."
  "name": "Detach Thornlamm"
- "desc": "Provided it has taken no damage from a silvered weapon this round, the\
    \ caprathorn grows one thornlamm as per the Thornlamms trait. A caprathorn can\
    \ have up to six attached thornlamms at a time."
  "name": "Grow Thornlamm"
- "desc": "The caprathorn consumes an attached thornlamm, regaining 21 hit points."
  "name": "Consume Thornlamm (Costs 2 Actions)"
- "desc": "The caprathorn chooses a creature that has 0 hit points that the caprathorn\
    \ can see within 30 feet of it. The target must make a DC 18 Wisdom saving throw.\
    \ On a success, the target is immune to this effect for 24 hours. If the save\
    \ fails, the target is entombed deep within the earth in a sphere of magical force\
    \ that is just large enough to contain the target. Nothing can pass through the\
    \ sphere, nor can any creature teleport or use planar travel to get into or out\
    \ of it. A caprathorn can entomb only one target at a time. This effect ends,\
    \ returning the target to where it was before being entombed, if the target regains\
    \ any hit points or the caprathorn dies."
  "name": "Entomb (Costs 2 Actions)"
- "desc": "A sphere of energy ripples out in a 30-foot-radius from the caprathorn.\
    \ Each creature in that area must make a DC 18 Constitution saving throw, taking\
    \ 38 (7d10) force damage on a failed save, or half a s much damage on a successful\
    \ one. For objects that aren't worn or carried, this emanation destroys Small\
    \ and smaller ones and damages larger ones. The circle destroys a wall of force\
    \ or similar structures of force in the area instantly. A creature or object is\
    \ disintegrated if it drops to 0 hit points due to this magic. A disintegrated\
    \ creature or object turns to fine ash, and nonmagical objects a disintegrated\
    \ creature wears or carries disintegrate with it."
  "name": "Annihilation Field (Costs 3 Actions; Recharges if an Entombed Creature\
    \ Dies or after a Long Rest)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/caprathorn-ghloe.webp"
```
^statblock