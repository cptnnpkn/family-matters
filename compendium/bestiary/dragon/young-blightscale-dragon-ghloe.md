---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon/cursed
statblock: inline
aliases: ["Young Blightscale Dragon"]
---
# [Young Blightscale Dragon](3-Mechanics\CLI\bestiary\dragon/young-blightscale-dragon-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 82*  

> [!quote]-  
> 
> Dragons are rare, so seeing one is terrifying. Seeing one rotting before your eyes as it approaches? Mind-shattering!

## Salvage

A claw from a young or older blightscale dragon can be fashioned into a dagger of venom. Doing so requires proficiency with smith's tools or woodcarver's tools, 5 days of work, and other materials worth 1,000 gp.

Blood and other fluids of a blightscale dragon can be harvested and used to offset the shadowsteel component when bestowing a curse of foul blight. A wyrmling is worth 250 gp, a young dragon 750 gp, an adult 1,500 gp, and an ancient dragon 3,000 gp.

## Lore

- **DC 15 Wisdom ([History](/3-Mechanics/CLI/rules/skills.md#History)).** A blightscale dragon is a dragon that has been subjected to a powerful curse.  
- **DC 15 Wisdom ([Medicine](/3-Mechanics/CLI/rules/skills.md#Medicine)).** A blightscale dragon is immune to necrotic damage and poison. Its breath weapon is a swarm of poisonous insects and gas.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** The curse on the blightscale dragon makes it exude a toxic, cursed gas when it dies, possibly passing on a portion of the curse.  

## A Blightscale Dragon's Lair

Blightscale dragons create temporary lairs in which they suffer the curse in rage and despair. Whether a cave or a building, the dragon pulls easy entrances down so that none can view it in its agonized state. The air inside is rank, and those who draw a full breath become nauseated. The curse attracts insects that construct colonies resembling yellow, congealed lumps.

```statblock
"name": "Young Blightscale Dragon (GHLoE)"
"size": "Large"
"type": "dragon"
"subtype": "cursed"
"alignment": "Neutral Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "152"
"hit_dice": "16d10 + 64"
"stats":
- !!int "19"
- !!int "12"
- !!int "19"
- !!int "12"
- !!int "11"
- !!int "8"
"speed": "40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "2"
  "Dexterity": !!int "4"
  "Wisdom": !!int "3"
"skillsaves":
  "Stealth": !!int "4"
  "Insight": !!int "3"
  "Perception": !!int "6"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 16"
"languages": "Draconic and one national language"
"cr": "8"
"traits":
- "desc": "When the dragon dies, it exudes a cloud of sickening, accursed gas. Each\
    \ creature within 20 ft. of the dragon must succeed on a DC 15 Constitution saving\
    \ throw or become [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) for\
    \ 1 minute. A creature can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success. However, a creature that fails two\
    \ of these saving throws becomes cursed. A creature cursed in this way takes 10\
    \ (3d6) necrotic damage and can't regain hit points, and the creature's hit\
    \ point maximum is reduced by an amount equal to the necrotic damage taken. Every\
    \ 24 hours, the cursed creature takes 10 (3d6) necrotic damage with similar\
    \ reduction to the creature's hit point maximum. If the curse reduces the target's\
    \ hit point maximum to 0, the target dies."
  "name": "Accursed Death"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 13\
    \ (2d8 + 4) piercing damage and 5 (2d4) necrotic damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4\
    \ + 4) slashing damage and 2 (1d4) poison damage."
  "name": "Claw"
- "desc": "The dragon exhales a 30-foot cone of poisonous insects and vile gas. Each\
    \ creature in that area must make a DC 15 Constitution saving throw, taking 14\
    \ (4d6) piercing damage and 28 (8d6) poison damage on a failed save, or half\
    \ as much damage on a successful one."
  "name": "Swarm Breath (Recharge 5-6)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/young-blightscale-dragon-ghloe.webp"
```
^statblock