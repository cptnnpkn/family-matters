---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead/shapechanger
statblock: inline
aliases: ["Ancient Corpse Walker"]
---
# [Ancient Corpse Walker](3-Mechanics\CLI\bestiary\undead/ancient-corpse-walker-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 104*  

> [!quote]-  
> 
> They rose from their graves, some by force of magic, others cursed through their life's misdeeds. Whatever the reason, we can't let them walk among the living.

## Salvage

Someone who has proficiency with alchemist's supplies can mix the mold from a corpse walker's skin with other materials worth 500 gp to produce a potion that grants all the corpse walker's damage resistances for 10 minutes. The skin from an ancient corpse walker can produce two doses of this potion. A humanoid that dies while under the effects of this potion rises as a corpse walker 24 hours later. Creating this rare potion requires a successful DC 15 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)) check and 8 hours of brewing.

Someone who has proficiency with smith's tools can fashion the femur of an ancient corpse walker into a one-handed melee weapon. Both femurs can make a two-handed weapon. Creating the weapon takes 10 days and extra materials worth 500 gp, and it's a magic weapon when complete. Someone you hit with an attack using the weapon can't regain hit points until the start of your next turn. If someone casts vampiric touch and inflict wounds on the weapon once per day while it's being made, and materials worth 1,000 more gp are added to the process, the weapon also takes on the properties of a sword of life stealing but need not be a sword.

## Lore

- **DC 10 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** It's bad luck for the living to set eyes upon a corpse walker. The returned gaze imparts a curse. Like a zombie, a corpse walker can take significant wounds and remain standing.  
- **DC 15 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** The corpse walker has a severe vulnerability to sunlight, which burns and distracts it. Radiant damage is a sure way to ensure the corpse walker stays down when slain.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** An ancient corpse walker can release spores that call loyal undead to it, although wind can disperse these spores. The ancient walker can also become a cloud of deadly spores that can animate corpses. If terribly wounded, the ancient corpse walker turns into this mist and has 2 hours to return to its lair or perish forever.  

> [!note] GM Advice
> 
> An ancient corpse walker can lair in ruins and create a legion of humanoid and beast zombies, as well as corpse walkers. Greater undead beings and necromancers might also use these creatures as lieutenants.
^gm-advice

```statblock
"name": "Ancient Corpse Walker (GHLoE)"
"size": "Large"
"type": "undead"
"subtype": "shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"stats":
- !!int "19"
- !!int "15"
- !!int "19"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "40 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "languages it knew in life"
"cr": "10"
"traits":
- "desc": "A humanoid that starts its turn within 30 feet of and able to see the ancient\
    \ corpse walker must succeed on a DC 16 Charisma saving throw, provided the corpse\
    \ walker isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated).\
    \ On a failure, the humanoid is [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, with disadvantage\
    \ if not averting its eyes from the corpse walker, ending the effect on itself\
    \ on a success. A creature failing two of these saving throws becomes cursed with\
    \ disturbing thoughts. Such a creature can't benefit from a short or long rest\
    \ until the curse is removed. On a successful save, the target is immune to any\
    \ corpse walker's Cursed Gaze for the next 24 hours.\n\nUnless surprised, a creature\
    \ can avert its eyes to avoid the saving throw. If the creature does so, it can't\
    \ see the corpse walker until the start of its next turn. A creature that looks\
    \ at the corpse walker in the meantime must immediately make the save."
  "name": "Cursed Gaze"
- "desc": "When the ancient corpse walker attacks, loyal undead within 120 feet of\
    \ it come to its aid. Moderate or stronger wind can disperse these spores before\
    \ they are effective."
  "name": "Spore Calling"
- "desc": "If the ancient corpse walker isn't in sunlight, it can use its action to\
    \ polymorph into a Large cloud of spores or back into its true form. Anything\
    \ it's wearing or carrying transforms with it. It reverts to its true form if\
    \ it dies. In cloud form, the ancient corpse walker can't take any actions, speak,\
    \ or manipulate objects. It's weightless, has a flying speed of 20 feet, can hover,\
    \ and can enter a hostile creature's space and stop there. This cloud spreads\
    \ around corners. If air can pass through a space, the cloud can do so without\
    \ squeezing, but it can't pass through water. It has advantage on Strength, Dexterity,\
    \ and Constitution saving throws, except those against wind. The cloud form is\
    \ immune to nonmagical damage other than that from sunlight.\n\nA creature that\
    \ starts its turn in the cloud must make a DC 16 Constitution saving throw. If\
    \ the save fails,\_the creature takes 13 3d8 poison and 10 (3d6) necrotic\
    \ damage and becomes [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ until the start of its next turn. On a successful save, a creature takes half\
    \ the damage and isn't [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned).\n\
    \nAfter 24 hours, corpses of beasts or humanoids that were in the spore area rise\
    \ as zombies loyal to the ancient corpse walker. If such a corpse is that of an\
    \ evil humanoid, it instead rises as a corpse walker loyal to the ancient corpse\
    \ walker. These spores can animate a corpse only once."
  "name": "Spore Cloud"
- "desc": "If damage reduces the ancient corpse walker to 0 hit points, it must make\
    \ a Constitution saving throw with a DC of 5 + the damage taken, unless the damage\
    \ is radiant or from a critical hit. On a success, the corpse walker drops to\
    \ 1 hit point instead.\n\nWhen it drops to 0 hit points, the ancient corpse walker\
    \ transforms into its Spore Cloud form. If it can't transform, it is destroyed.\
    \ The spores of this cloud deal half their normal damage and can't animate corpses.\n\
    \nThe ancient corpse walker can't transform back into its true form until it has\
    \ at least 1 hit point. It must reach its preferred resting place within 2 hours\
    \ or be destroyed. Once in its resting place, it reverts to its normal form.\n\
    \nIt is then [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed) and at\
    \ 0 hit points for 1 hour, and then it regains 1 hit point and ceases being [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed).\n\
    \nIf the ancient corpse walker takes damage while at 0 hit points, if able, it\
    \ makes the same saving throw that would allow it to drop to 1 hit point. However,\
    \ on a success, the ancient corpse walker remains at 0 hit points. If the ancient\
    \ corpse walker fails or can't make this saving throw, it is destroyed."
  "name": "Spore Fortitude"
- "desc": "The ancient corpse walker takes 20 radiant damage when it starts its turn\
    \ in sunlight. While in sunlight, it has disadvantage on attack rolls and ability\
    \ checks."
  "name": "Sunlight Hypersensitivity"
"actions":
- "desc": "The ancient corpse walker makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11\
    \ (2d6 + 4) bludgeoning damage and 10 (3d6) necrotic damage. If the target\
    \ is a creature, it must succeed on a DC 15 Constitution saving throw, or its\
    \ hit point maximum is reduced by an amount equal to the necrotic damage taken,\
    \ and the ancient corpse walker regains hit points equal to that amount. This\
    \ reduction lasts until the target finishes a long rest. The target dies if this\
    \ effect reduces its hit point maximum to 0. A humanoid slain this way rises 24\
    \ hours later as a zombie, but it rises as a corpse walker if it was evil. These\
    \ undead are loyal to the ancient corpse walker."
  "name": "Slam"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/undead/token/ancient-corpse-walker-ghloe.webp"
```
^statblock