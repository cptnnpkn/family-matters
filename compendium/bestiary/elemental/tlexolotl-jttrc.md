---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Tlexolotl"]
---
# [Tlexolotl](3-Mechanics\CLI\bestiary\elemental/tlexolotl-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 119*  

Tlexolotls are gigantic, salamander-like creatures that slumber deep in the magma of dormant volcanoes. A tlexolotl drowses amid the molten depths for centuries, rising only rarely to gorge itself on massive amounts of animal and plant life before returning to its slumber. Should a tlexolotl's sleep be disturbed—whether by intruders in its volcanic lair or the eruption of its molten home—the lava-drenched brute emerges in a rage, rampaging forth until its belly is full and its volcano is quiet once more.

Despite a tlexolotl's destructive prowess, the land around its volcano is often naturally abundant. It's common for those who live nearby to honor the tlexolotl as a protector of the land, as the ash it creates rejuvenates the soil and encourages life to flourish.

```statblock
"name": "Tlexolotl (JttRC)"
"size": "Huge"
"type": "elemental"
"alignment": "typically  Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "11d12 + 33"
"stats":
- !!int "25"
- !!int "10"
- !!int "17"
- !!int "7"
- !!int "13"
- !!int "9"
"speed": "40 ft."
"damage_immunities": "fire, poison"
"condition_immunities": "[paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., tremorsense 120 ft., passive Perception 11"
"languages": "Ignan"
"cr": "10"
"traits":
- "desc": "At the start of each of the tlexolotl's turns, each creature within 10\
    \ feet of it takes 7 (2d6) fire damage, and flammable objects in that aura that\
    \ aren't being worn or carried ignite. A creature that touches the tlexolotl or\
    \ hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage."
  "name": "Fire Aura"
- "desc": "The tlexolotl sheds bright light in a 30-foot radius and dim light for\
    \ an additional 30 feet."
  "name": "Illumination"
- "desc": "The tlexolotl regains 10 hit points at the start of its turn. If the tlexolotl\
    \ takes cold damage or is immersed in water, this trait doesn't function at the\
    \ start of the tlexolotl's next turn. The tlexolotl dies only if it starts its\
    \ turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "The tlexolotl makes one Bite attack and one Tail attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 12\
    \ (1d10 + 7) piercing damage plus 18 (4d8) fire damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 11\
    \ (1d8 + 7) bludgeoning damage plus 14 (4d6) fire damage. If the target is\
    \ a Large or smaller creature, it must succeed on a DC 19 Strength saving throw\
    \ or be pushed up to 10 feet away from the tlexolotl and knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Tail"
- "desc": "Gouts of molten lava erupt from the tlexolotl's body. Each creature in\
    \ a 30-foot-radius sphere centered on the tlexolotl must make a DC 15 Dexterity\
    \ saving throw. On a failed saving throw, a creature takes 21 (6d6) fire damage\
    \ and 21 (6d6) bludgeoning damage. On a successful saving throw, a creature\
    \ takes half as much damage."
  "name": "Pyroclasm (Recharge 5-6)"
"source":
- "JttRC"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/tlexolotl-jttrc.webp"
```
^statblock