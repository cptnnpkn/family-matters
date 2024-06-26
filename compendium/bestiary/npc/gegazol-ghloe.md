---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/24
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Gegazol"]
---
# [Gegazol](3-Mechanics\CLI\bestiary\npc/gegazol-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 117*  

> [!quote]-  
> 
> The Scourge of the North is an undead dragon named Gegazol. If I hear her name, I get the hell out of there. She's powerful, cunning, and treacherous. And she's rarely alone—she always has one army or another behind her.

## Salvage

Gegazol's lair holds a hoard gathered over the centuries. She has spread this loot among various vaults and chambers, and her Immortals guard these treasures. Her treasurers—a trio of compulsive vampires—keep careful records of the hoard in a library within the lair's inner vaults. Each record contains a great deal of knowledge about the fates of various objects, and sometimes the vampires track a treasure beyond its gifting and engage in occasional quests to regain a lost valuable. Each historic tome from the library is worth at least 100 gp to the right collector. Enterprising adventurers could use any of these books as a guide to searches for lost treasures.

## Lore

- **DC 10 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** Gegazol, Scourge of the North, is an ancient dragon transformed into an undead horror millennia ago. Tales as old as creation tell of her infrequent but violent assaults on lands south of her lair, and all lands of Etharis are south of her lair.  
- **DC 15 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** Not only possessing great physical power, defenses against magic, and an undead army at her back, Gegazol, like a lich, has a soul vessel that harbors her undead soul and can rejuvenate her body when Gegazol is destroyed. It's said that this vessel is a massive daemon skull, and that the dragon keeps it hidden in her lair.  
- **DC 20 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** Gegazol calls the undead who serve her Immortals'. Among them are vampires, ghouls, and undead that are even more powerful. Given many of these undead have fallen in her wars and powerplays, the Immortal title is aspirational.  

> [!note] Daemon Skull Soul Vessel
> 
> The ancient daemon skull that serves as Gegazol's soul vessel possesses infernal power, giving it the means for mischief and self-preservation. It has AC 6, but it's immune to bludgeoning, piercing, and slashing damage from nonmagical attacks, as well as cold, fire, necrotic, and psychic damage. It's immune to all conditions, and it has a +7 bonus to all saving throws, making saves against spells and magical effects with advantage. The skull has 200 hit points.
> 
> When harmed, the skull sends out a psychic alarm. Gegazol and her Immortals can sense this alarm, provided they are on the same plane of existence. Also, when a creature deals the skull damage, that creature must succeed on a DC 21 Wisdom saving throw or take psychic damage equal to half the damage the creature dealt.
> 
> If her soul vessel is destroyed, Gegazol can't rejuvenate. When her body is destroyed again, she dies.
^daemon-skull-soul-vessel

## Gegazol's Lair

The Scourge's lair is the sinkhole cave on an island off the northernmost shores of Etharis, north of even the raging coldfire. In this cave, the daemon's skull sits. It rests at the bottom of a deep, wet cavern upon a pedestal carved into the earth. Magic wards protect the crack above the skull. Gegazol's Immortals, a brutal cadre of undead warriors the dragon created or conquered, guard the expanded catacombs around the shrine. Gegazol needs no rest, but between campaigns, she lounges within the shrine, curled around the skull's pedestal. The whole place stinks of decay, making the site nauseating. While in her lair, Gegazol's Stench radius increases to 120 feet.

```statblock
"name": "Gegazol (GHLoE)"
"size": "Gargantuan"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "462"
"hit_dice": "25d20 + 200"
"stats":
- !!int "27"
- !!int "14"
- !!int "26"
- !!int "16"
- !!int "15"
- !!int "23"
"speed": "40 ft., burrow 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "9"
  "Intelligence": !!int "10"
"skillsaves":
  "Perception": !!int "9"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 19"
"languages": "Draconic"
"cr": "24"
"traits":
- "desc": "Gegazol can move across and climb icy surfaces without needing to make\
    \ an ability check. Additionally, difficult terrain composed of ice or snow doesn't\
    \ cost her extra movement."
  "name": "Ice Walk"
- "desc": "If Gegazol fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Gegazol has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "If destroyed while her soul vessel remains intact, Gegazol's [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)\
    \ body rejuvenates within 5 feet of the soul vessel, where she regains 78 (12d12)\
    \ hit points each day. When she has regained half her hit points, she regains\
    \ consciousness."
  "name": "Rejuvenation"
- "desc": "Any creature not immune to the [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ condition that starts its turn within 30 feet of Gegazol must succeed on a DC\
    \ 23 Constitution saving throw or become [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ until the start of that creature's next turn. On a successful saving throw,\
    \ the creature is immune to Gegazol's stench for 1 hour."
  "name": "Stench"
- "desc": "Gegazol and undead within 120 feet of her have advantage on saving throws\
    \ against effects that turn undead."
  "name": "Turning Defiance"
"actions":
- "desc": "Gegazol can use her frightful presence. She then makes three attacks: one\
    \ with her bite and two with her claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 21\
    \ (2d12 + 8) piercing damage, 9 (2d8) cold damage and 9 (2d8) necrotic damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 19\
    \ (2d10 + 8) piercing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 19\
    \ (2d10 + 8) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 23 Strength saving throw or fall [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Tail"
- "desc": "Each creature of Gegazol's choice within 120 feet of and aware of her must\
    \ succeed on a DC 21 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Gegazol's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "Gegazol exhales frozen material and rot in a 90-foot cone. Each creature\
    \ in that area must make a DC 23 Constitution saving throw, taking 45 (10d8)\
    \ cold damage and 45 (10d8) necrotic damage on a failed save, or half as much\
    \ damage on a successful one. Those who fail the save also gain two levels of\
    \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion) until the end\
    \ of Gegazol's next turn, and those who fail by 5 or more are also [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ for 1 minute. A [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded) creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Breath of Long Night (Recharge 5-6)"
"legendary_actions":
- "desc": "Gegazol gains truesight out to 120 feet until the end of her next turn\
    \ and can make a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Daemon Sight"
- "desc": "Gegazol makes a tail attack."
  "name": "Tail"
- "desc": "Gegazol beats her wings. Each creature within 30 feet of her must succeed\
    \ on a DC 23 Dexterity saving throw or take 17 (2d8 + 8) bludgeoning damage\
    \ and 9 (2d8) cold damage, and then fall [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ Gegazol can then fly up to half her flying speed."
  "name": "Wings of Winter (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), Gegazol takes a lair action\
    \ to cause one of the following effects. Gegazol can't use the same effect two\
    \ rounds in a row."
  "name": ""
- "desc": "- Tendrils of necrotic power rise and reach for living creatures within\
    \ the lair. Each living creature in the lair must attempt a DC 21 Constitution\
    \ saving throw or take 13 (3d8) necrotic damage and gain one level of exhaustion\
    \ until initiative count 20 on the next round.  \n- Gegazol crashes her wings\
    \ upon the ground, and rime spreads in a sphere with a 120-foot radius around\
    \ her. This sphere spreads around corners and creates difficult terrain made of\
    \ ice. Creatures in that area must make a DC 21 Constitution saving throw. Those\
    \ who fail take 18 (4d8) cold damage and are grappled (escape DC 21). On a success,\
    \ the creature takes half the damage and isn't grappled. The difficult terrain\
    \ disappears on initiative count 20 on the next round.  \n- Gegazol creates an\
    \ opaque wall of black ice on a solid surface she can see within 120 feet of her.\
    \ The wall is made up of twenty contiguous 10-foot square panels that are each\
    \ 2 feet thick. When the wall appears, each creature in its area is pushed 5 feet\
    \ out of the wall's space, appearing on whichever side of the wall the creature\
    \ wants. Each 10-foot section of the wall has AC 5, 60 hit points, vulnerability\
    \ to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage.\
    \ The wall disappears when Gegazol uses this lair action again or when she dies.\
    \  "
  "name": ""
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/npc/token/gegazol-ghloe.webp"
```
^statblock