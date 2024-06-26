---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ai
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
aliases: ["K'thriss Drow'b"]
---
# [K'thriss Drow'b](3-Mechanics\CLI\bestiary\npc/kthriss-drowb-ai.md)
*Source: Acquisitions Incorporated p. 202*  

> [!quote]-  
> 
> All things are divided into meat and mouths-but even a mouth is just meat.

The drow warlock K'thriss Drow'b cuts a dashing figure as the worldly representative of the Ur-a ravenous, inscrutable, and largely indifferent elder entity from beyond reality. Tapped into this dark power, the "C" Team's hoards person sees all existence as a puzzle to unlock, and he is obsessed by the essential lack of meaning and purpose in the structures of so-called "reality." Still, all things considered, he is most often polite and affable. Because after a long adventuring career, he understands that he can't afford to make more enemies.

Given his blue skin tone, rumors suggest that K'thriss is of mixed heritage, but no one knows for sure. As a young and doubting adherent of Lolth, he stumbled upon fragments of a relic known as the Black Altar, exposing him to their infinite truths and shocking the drow's hair jet-black. His matching "beard" is actually a slow-growing colony of inert spores that K'thriss believes makes him look distinguished. Possessed of alarming and asymmetric crystalline eyes, he often wears a blindfold to spare others his visage, seeing through the eyes of his familiar while he does.

Tentacles play a big part in K'thriss's spellcasting, whether wrenching him through the sky when he uses magic to fly, or manifesting in dark, suckered form when he casts spells such as thorn whip. And when enemies hear K'thriss whisper the deep truths of the Ur-typically something about how on a geologic time scale, everyone's desires are meaningless-they remember it.

K'thriss's familiar, Ligotti, is a semisapient remnant of a tentacle attack, spawned by the warlock's intercessor patron god. Though entirely alien to the material plane (and often appearing in the form of a staff), Ligotti uses the stat block of a poisonous snake with these changes:

- It has an Intelligence score of 12 (+2).  
- It has telepathy out to a range of 30 feet.  

```statblock
"name": "K'thriss Drow'b (AI)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"ac_class": "[studded leather](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "8"
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "11"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "3"
  "Wisdom": !!int "3"
  "Intelligence": !!int "3"
  "Strength": !!int "0"
  "Constitution": !!int "2"
"skillsaves":
  "Investigation": !!int "4"
  "Religion": !!int "4"
  "Insight": !!int "2"
  "Perception": !!int "2"
  "Arcana": !!int "4"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Celestial, Common, Elvish, Undercommon; can read all writing"
"cr": "3"
"traits":
- "desc": "K'thriss's innate spellcasting ability is Charisma (spell save DC 14).\
    \ He can innately cast the following spells, requiring no material components:\n\
    \nAt will: [dancing lights](/3-Mechanics/CLI/spells/dancing-lights.md), [disguise\
    \ self](/3-Mechanics/CLI/spells/disguise-self.md)\n\n1/day each: [darkness](/3-Mechanics/CLI/spells/darkness.md),\
    \ [faerie fire](/3-Mechanics/CLI/spells/faerie-fire.md)"
  "name": "Innate Spellcasting"
- "desc": "K'thriss is a 5th-level spellcaster. His spellcasting ability is Charisma\
    \ (spell save DC 14, +6 to hit with spell attacks). He regains his expended\
    \ spell slots when he finishes a short or long rest, and knows the following warlock\
    \ spells:\n\nCantrips (at will): [chill touch](/3-Mechanics/CLI/spells/chill-touch.md),\
    \ [eldritch blast](/3-Mechanics/CLI/spells/eldritch-blast.md), [mending](/3-Mechanics/CLI/spells/mending.md),\
    \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md), [thorn whip](/3-Mechanics/CLI/spells/thorn-whip.md),\
    \ [vicious mockery](/3-Mechanics/CLI/spells/vicious-mockery.md)\n\n1st-3rd level\
    \ (2 slots): [dissonant whispers](/3-Mechanics/CLI/spells/dissonant-whispers.md),\
    \ [fly](/3-Mechanics/CLI/spells/fly.md), [hex](/3-Mechanics/CLI/spells/hex.md),\
    \ [misty step](/3-Mechanics/CLI/spells/misty-step.md), [sending](/3-Mechanics/CLI/spells/sending.md),\
    \ [shatter](/3-Mechanics/CLI/spells/shatter.md)"
  "name": "Spellcasting"
- "desc": "K'thriss wears a [robe of stars](/3-Mechanics/CLI/items/robe-of-stars.md)\
    \ (accounted for in his statistics). The robe allows him to cast the following\
    \ spells: 6/day: [magic missile](/3-Mechanics/CLI/spells/magic-missile.md) (7\
    \ missiles)"
  "name": "Special Equipment"
- "desc": "K'thriss can telepathically speak to any creature he can see within 30\
    \ feet of him, provided the creature can understand at least one language."
  "name": "Awakened Mind"
- "desc": "K'thriss has advantage on saving throws against being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep. Sunlight Sensitivity. While in sunlight, K'thriss\
    \ has disadvantage on attack rolls, as well as on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Fey Ancestry"
"actions":
- "desc": "K'thriss makes two attacks with his sickle."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Sickle"
"source":
- "AI"
"image": "/3-Mechanics/CLI/bestiary/npc/token/kthriss-drowb-ai.webp"
```
^statblock