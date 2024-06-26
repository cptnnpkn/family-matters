---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Cobblefright"]
---
# [Cobblefright](3-Mechanics\CLI\bestiary\undead/cobblefright-hwcs.md)
*Source: Humblewood Campaign Setting p. 180*  

Cobblefrights are undead monstrosities created through dark necromancy. Rumored to have been orig-inally devised by the mad necromancer Lathrus of the Night's Call, cobblefrights are made by linking several birdfolk skeletons together to form one frightening creature with enhanced physical properties. Among those who have studied Lathrus' research, only the most reckless have tried to create a cobblefright of their own, often to disastrous effect.

## Horror of Horrors

Cobblefrights are generally pieced together from the skeletons of five or six birdfolk. The combination of multiple bodies allows not only for a larger and more robust design, but also vastly increases the quantity of necromantic energies cobblefrights contain. This increased capacity for power provides cobblefrights with tremendous strength, as much as a dozen birdfolk combined. It also grants cobblefright bones greater durability. Their remarkable power and resilience is somewhat of a double-edged sword, as cobblefrights also require a large amount of necromantic energy to be sustained. The surviving records of cobblefright creators note that, quite unexpectedly, the creatures developed the ability to drain the life force of other living beings, replenishing their own energy in the process. This makes cobblefrights useful as independent sentries, so long as they have a steady supply of living beings to fuel them.

## Chaotic Psyche

The discordant parts that comprise cobblefrights exert tremendous strain on the bodies of these creatures. The source of this strain is rooted in the same magic that allows birdfolk skeletons to recall skills they once knew in life: the bones remember. Remnants of the soul such as memories, desires, fears, skills, and certain forms of knowledge are imprinted on the bones of the departed. When activated by necromantic energy, these conflicting impressions swirl chaotically within cobblefrights. Since cobblefrights are composed of multiple bodies, often originating from differing times, places, and walks of life, the impressions contained within the creatures are particularly volatile and chaotic. This constant internal conflict requires large and regular supplies of energy to keep cobblefrights stable, but it also grants them a surprising degree of resistance against those who would seek to wrest control of the creatures away from their creator. However, necromancers must be careful to maintain control over these dangerous creatures. Damaged cobblefrights will readily harvest their maker as an immediate source of life energy.

```statblock
"name": "Cobblefright (HWCS)"
"size": "Large"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "102"
"hit_dice": "12d10 + 36"
"stats":
- !!int "19"
- !!int "11"
- !!int "16"
- !!int "6"
- !!int "8"
- !!int "5"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "2"
  "Constitution": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Auran, Birdfolk, and any other languages it knew in life,\
  \ but can't speak"
"cr": "5"
"traits":
- "desc": "Whenever the cobblefright starts its turn with 40 hit points or fewer,\
    \ roll a d6. On a 6, the cobblefright goes berserk. On each of its turns while\
    \ berserk, the cobblefright attacks the nearest creature it can see. If no creature\
    \ is near enough to move to and attack, the cobblefright attacks an object, with\
    \ preference for an object smaller than itself. Once the cobblefright goes berserk,\
    \ it continues to do so until it is destroyed or regains all its hit points."
  "name": "Berserk"
"actions":
- "desc": "The cobblefright makes three claw attacks. One of those attacks can be\
    \ replaced by a grab attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d4\
    \ + 4) piercing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: The\
    \ target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) (escape\
    \ DC 15). The cobblefright can grapple up to 2 targets at once. Once at the start\
    \ of its turn for each target it has [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ the cobblefright can squeeze its victim. The target must make a DC 15 Strength\
    \ saving throw, taking 13 (2d8 + 4) bludgeoning damage on a failed save."
  "name": "Grab"
- "desc": "One creature the cobblefright has [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ must make a DC 14 Constitution saving throw, taking 11 (2d10) necrotic damage\
    \ on a failed save, or half that amount on a success. The target's hit point maximum\
    \ is reduced by the amount of necrotic damage taken, and the cobblefright regains\
    \ hit points equal to that amount. The reduction lasts until the target finishes\
    \ a short or long rest."
  "name": "Soul Siphon"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/undead/token/cobblefright-hwcs.webp"
```
^statblock