---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/gnoll
statblock: inline
aliases: ["Venomous Gnoll"]
---
# [Venomous Gnoll](3-Mechanics\CLI\bestiary\humanoid/venomous-gnoll-ghloe.md)
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
"name": "Venomous Gnoll (GHLoE)"
"size": "Medium"
"type": "humanoid"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "12"
- !!int "14"
- !!int "13"
- !!int "6"
- !!int "13"
- !!int "7"
"speed": "30 ft."
"saves":
  "Constitution": !!int "3"
"skillsaves":
  "Stealth": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Gnoll"
"cr": "1"
"traits":
- "desc": "When the venomous gnoll reduces a creature to 0 hit points with a melee\
    \ attack on its turn, the gnoll can take a bonus action to move up to half its\
    \ speed and make a bite attack."
  "name": "Rampage"
"actions":
- "desc": "The venomous gnoll makes two attacks, only one of which can be a bite."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage and 2 (1d4) poison damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage and 2 (1d4) poison damage."
  "name": "Claws"
- "desc": "Ranged Weapon Attack: +4 to hit, range 20/60 ft., one target. Hit:\
    \ 4 (1d4 + 2) piercing damage and 2 (1d4) poison damage."
  "name": "Spine Spike"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/venomous-gnoll-ghloe.webp"
```
^statblock