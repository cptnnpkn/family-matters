---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/22
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
aliases: ["Angel of Empyreus"]
---
# [Angel of Empyreus](3-Mechanics\CLI\bestiary\celestial/angel-of-empyreus-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 104*  

> [!quote]-  
> 
> I am that which can cleanse temptation from the land and restore it once more to divinity. What a weak creature of flesh you are, blessed with free will and fickle fancy. I will reveal your weakness, wretched mortal.

## Salvage

The Angel of Empyreus wields a holy avenger. Upon its death, its intelligence inhabits the sword. To attune to it, a paladin character must agree to carry on the angel's mission to cleanse the land of immorality.

A cup of its blood can be made into a [potion of supreme healing](/3-Mechanics/CLI/items/potion-of-supreme-healing.md) with a DC 10 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)) check from someone proficient with alchemist's supplies. Six cups of blood can be taken from the Angel of Empyreus.

Its bones can be used in place of diamonds for use in raise dead and similar magic, up to the equivalent of 10,000 gp worth.

## Lore

- **DC 10 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** The Arch Seraphs are attended by mighty angels who act as their lieutenants and execute the divine remnants' orders.  
- **DC 15 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** Empyreus went into battle surrounded by an honor guard of fearsome celestials honed by aeons of divine war. Many of them remained at Empyreus' side at the end of the Four Divines' War, but not all remained loyal.  
- **DC 20 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** Peasant revolts and religious zealotry are on the rise in the Altenheim hinterland. Most say it's the usual grievances, but some whisper that a commander of the celestial hosts leads the revolt, and its ranks swell by the day.  

```statblock
"name": "Angel of Empyreus (GHLoE)"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Neutral"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "445"
"hit_dice": "33d10 + 264"
"stats":
- !!int "29"
- !!int "23"
- !!int "26"
- !!int "25"
- !!int "18"
- !!int "30"
"speed": "40 ft., fly 90 ft."
"saves":
  "Charisma": !!int "17"
  "Wisdom": !!int "11"
  "Intelligence": !!int "14"
  "Strength": !!int "16"
"skillsaves":
  "Intimidation": !!int "17"
  "Investigation": !!int "14"
  "Religion": !!int "14"
  "Insight": !!int "11"
  "Perception": !!int "11"
  "Arcana": !!int "14"
"damage_resistances": "fire; lightning; radiant; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "22"
"traits":
- "desc": "The Angel of Empyreus' weapon attacks are magical. When it hits with any\
    \ weapon, the weapon deals an extra 27 (6d8) radiant damage (included in the\
    \ attack)."
  "name": "Celestial Arsenal"
- "desc": "The Angel of Empyreus can cast the [command](/3-Mechanics/CLI/spells/command.md)\
    \ spell at will (spell save DC 25)."
  "name": "Authoritative Mien"
- "desc": "The Angel of Empyreus knows if it hears a lie."
  "name": "Divine Awareness"
- "desc": "The Angel of Empyreus can project a 60-ft. aura of holiness as a bonus\
    \ action. The aura affects all creatures within its area unless the Angel of Empyreus\
    \ chooses to exclude a creature from the effect. A creature remains under the\
    \ aura's effect until it leaves the area, dies, or when the Angel of Empyrean\
    \ chooses a new aura effect. Only one effect may be active at a time:\n\n- Judgement.\
    \ Creatures who start their turn in the aura must succeed on a DC 25 Charisma\
    \ saving throw. On a failure, the creature gains a level of [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion)\
    \ as intensified feelings of guilt, doubt, remorse, and selfcriticism overwhelm\
    \ the affected creature. Creatures who succeed on the saving throw are immune\
    \ to the effect for one hour.  \n- Valor. Creatures who start their turn in\
    \ the aura gain 15 temporary hit points, cannot be [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ or [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), and have advantage\
    \ on saving throws against spells and other magical effects  "
  "name": "Holy Aura"
"actions":
- "desc": "The Angel of Empyreus can make three attacks with its holy avenger."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +24 to hit, reach 10 ft., one target. Hit: 23\
    \ (4d6 + 9) slashing damage plus 27 (6d8) radiant damage. If the target is\
    \ a fiend or undead, it takes an additional 22 (4d10) radiant damage."
  "name": "Holy Avenger"
- "desc": "The Angel of Empyreus unleashes holy fire in a 60-foot cone. Each creature\
    \ in that area must succeed on a DC 25 Dexterity saving throw or take 35 10d6\
    \ fire and 35 (10d6) radiant damage. Creatures take half damage on a success."
  "name": "Blazing Radiance (Recharge 5-6)"
"legendary_actions":
- "desc": "The Angel of Empyreus flies up to half its fly speed."
  "name": "Fly"
- "desc": "The Angel of Empyreus makes a holy avenger attack."
  "name": "Sword"
- "desc": "The Angel of Empyreus hurls its sword in a 30-foot line that is 5-feet\
    \ wide. Each creature in that line must succeed on a DC 24 Dexterity saving throw\
    \ or take 23 (4d6 + 9) slashing damage plus 27 (6d8) radiant damage. The sword\
    \ immediately returns to its hand."
  "name": "Hurl Sword (2 actions)"
- "desc": "The Angel of Empyreus recharges its Blazing Radiance."
  "name": "Recharge"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/celestial/token/angel-of-empyreus-ghloe.webp"
```
^statblock