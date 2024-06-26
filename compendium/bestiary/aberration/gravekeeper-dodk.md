---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Gravekeeper"]
---
# [Gravekeeper](3-Mechanics\CLI\bestiary\aberration/gravekeeper-dodk.md)
*Source: Dungeons of Drakkenheim p. 210*  

> [!quote]- A quote from Overheard from a party of nobles in the Red Lion Hotel  
> 
> The Royal Crypts below Castle Drakken housed the bodies of kings and queens, dukes and nobles of generations gone. They were tended by the many gravekeepers who worked diligently to light the lanterns below so the dead could have safe passage to the light. I shudder to think what has become of those crypts, and their keepers, in these dark times.

The Gravekeeper is a hovering mass of writhing appendages. Amongst its horrid and grotesque form one can make out the many faces of long lost gravekeepers of Castle Drakken, but their expressions are twisted in horror of their last moments, and their eyes are hollow with a dim octarine light emanating from within. Covering the floating mass are hundreds of arms, several of them holding softly glowing lanterns. The lanterns glow with octarine flames that cast flickering shadows across the crypt. The Gravekeeper wanders amongst the dead, awakening them into grasping souls, clawing their way out of the many graves amongst the lordly tombs of the castle.


```statblock
"name": "Gravekeeper (DoDk)"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "210"
"hit_dice": "20d10 + 100"
"stats":
- !!int "18"
- !!int "7"
- !!int "21"
- !!int "19"
- !!int "17"
- !!int "21"
"speed": "0 ft., fly 30 ft. (hover)"
"saves":
  "Charisma": !!int "10"
  "Wisdom": !!int "8"
  "Constitution": !!int "10"
"skillsaves":
  "Perception": !!int "13"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "all but does not speak"
"cr": "13"
"traits":
- "desc": "The Gravekeeper projects a brilliant corona of light which sheds bright\
    \ light to a range of 60 feet, and causes attack rolls against it to have disadvantage.\
    \ If it is hit by an attack, this trait is disrupted until the end of its next\
    \ turn. This trait is also disrupted while the Gravekeeper is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ or has a speed of 0."
  "name": "Dazzling Illumination"
- "desc": "If the Gravekeeper fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22\
    \ (4d8 + 4) bludgeoning damage plus 10 (3d6) necrotic damage."
  "name": "Slam"
- "desc": "Magical octarine beams flash from the Gravekeeper's many lanterns. Each\
    \ beam has a different power. Each creature within 120 feet of the Gravekeeper\
    \ which is not behind total cover rolls a d6 to determine which colour ray affects\
    \ it. The DC for all saving throws is 18:\n\n- 1. Dispelling Blast. The targeted\
    \ creature must succeed on an Intelligence saving throw or take 35 (10d6) psychic\
    \ damage, and any spell or magical effect upon the target ends. A creature who\
    \ fails this saving throw has their [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ broken on any spell they were actively maintaining.  \n- 2. Forceful Blast.\
    \ The targeted creature must succeed on a Strength saving throw or take 35 (10d6)\
    \ force damage, be pushed 20 feet away, and knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \  \n- 3. Blinding Blast. The targeted creature must succeed on a Constitution\
    \ saving throw or take 35 (10d6) radiant damage and be [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ for 1 minute. A [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded) creature\
    \ can repeat the saving throw on each of its turns, ending the effect on itself\
    \ on a success.  \n- 4. Contamining Blast. The targeted creature must succeed\
    \ on a Constitution saving throw or take 35 (10d6) necrotic damage and gain\
    \ one level of contamination.  \n- 5. Igniting Blast. The targeted creature\
    \ must succeed on a Dexterity saving throw or take 35 (10d6) fire damage, and\
    \ catches fire; until someone takes an action to douse the fire, the target takes\
    \ 35 (10d6) fire damage at the start of each of its turns.  \n- 6. Freezing\
    \ Blast. The targeted creature must succeed on a Constitution saving throw or\
    \ take 35 (10d6) cold damage, and it can't take a reaction until the end of\
    \ its next turn. Moreover, on its next turn, it must choose whether it gets a\
    \ move, an action, or a bonus action; it gets only one of the three. On a successful\
    \ save, the target takes half as much damage and suffers none of the blast's other\
    \ effects.  "
  "name": "Lantern Blast"
"legendary_actions":
- "desc": "The Gravekeeper makes a slam attack."
  "name": "Slam"
- "desc": "The Gravekeeper moves its speed without provoking opportunity attacks."
  "name": "Glide"
- "desc": "The Gravekeeper uses its Lantern Blast."
  "name": "Lantern Blast (Costs 3 actions)"
"lair_actions":
- "desc": "When fighting inside its lair, the Gravekeeper can invoke the ambient magic\
    \ to take lair actions. On initiative count 20 (losing initiative ties), the Gravekeeper\
    \ can take one lair action to cause one of the following effects:"
  "name": ""
- "desc": "- A 10 foot radius cylinder of delerium sludge spouts up from the floor\
    \ and raises 30 feet into the air before bubbling back down. Any creature caught\
    \ in this spout must succeed on a DC 18 Constitution saving throw. They take 42\
    \ (12d6) necrotic damage on a failed saving throw, and half as much on a successful\
    \ one. In addition, characters who fail the saving throw gain one level of contamination.\
    \  \n- Walls within 120 feet of the Gravekeeper sprout grasping, fleshy arms.\
    \ Each creature of the Gravekeepers choice that starts its turn within 10 feet\
    \ of such a wall must succeed on a DC 15 Dexterity saving throw or be grappled.\
    \ Escaping requires a successful DC 15 Strength (  \n- [Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics)\
    \  \n- ) or Dexterity (  \n- [Acrobatics](/3-Mechanics/CLI/rules/skills.md#Acrobatics)\
    \  \n- ) check.  \n- A torch or lantern hanging in the room emits one of the Gravekeeper's\
    \ lantern blasts.  "
  "name": ""
- "desc": "The Gravekeeper can't repeat an effect until they have all been used, and\
    \ it can't use the same effect two rounds in a row."
  "name": ""
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/gravekeeper-dodk.webp"
```
^statblock