---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Lenore von Kessel"]
---
# [Lenore von Kessel](3-Mechanics\CLI\bestiary\npc/lenore-von-kessel-dodk.md)
*Source: Dungeons of Drakkenheim p. 134*  

Transformed by the Haze, Lenore is a mockery of her former self and abhorrently reacts to her own appearance. She dimly remembers seeking shelter in her grotto, but has no recollection of how she escaped the castle.

- **Personality Trait.** I speak softly in a perpetual daydream, rhapsodically imagining myself to be in a tragic fairytale while casting others in fictional roles.  
- **Ideal.** The world is a mirror held up to my own glorious reflection.  
- **Bond.** I obsessively crave beauty, decadence, and relish in art of all kinds, and especially love my garden and my lilies. They are all I have left.  
- **Flaw.** I fly into an enraged fury at the sight of my own likeness or the names of my lost family members.  

Any character proficient in

[History](/3-Mechanics/CLI/rules/skills.md#History)

can instantly recognize Lenore despite her mutations. Before her transformation, Lenore was extraordinarily vain and narcissistic, though was uncharastically kind and gentle to her servants. She wore outrageously ornamented gowns, hats, makeup, and jewelry, including a famous golden necklace set with eleven emeralds. She loved her children only as extensions of herself, and absolutely despised her husband.

```statblock
"name": "Lenore von Kessel (DoDk)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"stats":
- !!int "10"
- !!int "15"
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "15"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common"
"cr": "6"
"traits":
- "desc": "When a creature that can see Lenore's eyes starts its turn within 30 feet\
    \ of her, Lenore can force it to make a DC 14 Constitution saving throw if she\
    \ isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated) and\
    \ can see the creature. The creature takes 22 (4d10) radiant damage on a failed\
    \ save, or half as much on a successful one. In addition, creatures who fail this\
    \ saving throw gain one level of contamination.\n\nUnless surprised, a creature\
    \ can avert its eyes to avoid the saving throw at the start of its turn. If the\
    \ creature does so, it can't see Lenore until the start of its next turn, when\
    \ it can avert its eyes again. If the creature looks at Lenore in the meantime,\
    \ it must immediately make the save.\n\nIf Lenore sees herself reflected on a\
    \ polished surface within 30 feet of her and in an area of bright light, she becomes\
    \ [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded) and [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ for 1d6 hours."
  "name": "Radiant Gaze"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 4\
    \ (1d4 + 2) piercing damage plus 14 (4d6) necrotic damage. The target must\
    \ succeed on a DC 14 Constitution saving throw or gain one level of contamination."
  "name": "Tentacle Hair"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/npc/token/lenore-von-kessel-dodk.webp"
```
^statblock