---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/gnoll
statblock: inline
aliases: ["Gnoll Brute"]
---
# [Gnoll Brute](3-Mechanics\CLI\bestiary\humanoid/gnoll-brute-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 60*  

> [!quote]-  
> 
> I never believed the rumors about the Beast and how it could change people. Then I saw how everyone at the logging camp had been transformed. It had to be a power even greater than a god's.

## Salvage

The spine spikes of a venomous gnoll can be fashioned into four arrows, bolts, or darts. Someone who has proficiency with smith's tools or tinker's tools can make these projectiles in 4 hours. Each time one of these projectiles hits a target, the target takes an extra (`1d4`) poison damage, but if the `d20` on the attack roll is a 1 or an even number other than 20, the projectile ceases to be poisonous.

Someone who has proficiency with alchemist's supplies can use the saliva glands from two gnoll brutes or one rampage gnoll to create a potion of growth. The glands must be harvested by someone who has proficiency in the Medicine skill, and doing so requires a successful DC 13 Wisdom ([Medicine](/3-Mechanics/CLI/rules/skills.md#Medicine)) check. These glands must be used within 3 days or they go bad, although a gentle repose spell cast on the glands makes them last for that spell's duration. Making the potion requires 1 day of work and reagents worth 25 gp.

The wings of a rampage gnoll can be used to fashion bat wings of flying. Someone who has proficiency in leatherworker's tools can make this cloak in 5 days, using reagents worth 500 gp. Somebody must cast fly on the cloak on three out of the five days of its making. These wings give you a fly speed of only 40 feet, but they can be used once every `1d8` hours.

## Lore

- **DC 10 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** Gnolls were once normal humanoids, but they have been mutated by the power of the Beast.  
- **DC 10 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Some gnolls use spikes that grow from their bones, usually the spine, as projectiles. Different gnolls have different mutations, though, and some of these spikes are poisonous. The strongest mutants develop wings and infect the minds of those nearby with bloodthirsty fury.  
- **DC 15 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** Gnolls form bands along with other mutated creatures to rampage across their region. The gnolls eat the flesh and drink the blood of any living things they kill. They speak to each other in their own language of howls, snarls, and grunts.  

```statblock
"name": "Gnoll Brute (GHLoE)"
"size": "Medium"
"type": "humanoid"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "12"
- !!int "15"
- !!int "6"
- !!int "13"
- !!int "7"
"speed": "40 ft."
"skillsaves":
  "Athletics": !!int "5"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Gnoll"
"cr": "2"
"traits":
- "desc": "A melee weapon deals one extra die of its damage when the gnoll brute hits\
    \ with it (included in the attacks)."
  "name": "Brute"
- "desc": "If the gnoll brute moves at least 20 feet straight toward a target and\
    \ then hits it with a melee weapon attack on the same turn, the target takes one\
    \ extra die of the weapon's damage. If the target is a creature, it must succeed\
    \ on a DC 13 Strength saving throw or fall [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Charge"
- "desc": "The gnoll brute has advantage on initiative rolls and saving throws against\
    \ being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed) or [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened).\
    \ If surprised, the gnoll can still act normally on its first turn."
  "name": "Instinctive"
- "desc": "When the gnoll brute reduces a creature to 0 hit points with a melee attack\
    \ on its turn, the gnoll can take a bonus action to move up to half its speed\
    \ and make a bite attack."
  "name": "Rampage"
"actions":
- "desc": "The gnoll brute makes one bite attack and one claws attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
    \ (2d6 + 3) slashing damage."
  "name": "Claws"
"reactions":
- "desc": "If any creature allied with and within 100 feet of the gnoll brute uses\
    \ its Rampage trait, the gnoll brute can use its Rampage trait, too, provided\
    \ the brute can see that ally."
  "name": "Shared Rampage"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/gnoll-brute-ghloe.webp"
```
^statblock