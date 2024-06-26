---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Knight-Captain Theodore Marshal"]
---
# [Knight-Captain Theodore Marshal](3-Mechanics\CLI\bestiary\humanoid/knight-captain-theodore-marshal-dodk.md)
*Source: Dungeons of Drakkenheim p. 215*  

Knight-Captain Theodore Marshal is a man in his prime. He is athletic and tall with boldly sculpted features, bronzed skin, and unkempt sandy brown hair. Unshaven stubble has grown into a beard over the criss-cross of scars on his face. A leather patch covers his right eye. He wears gleaming silver plate armour etched with golden trim, and carries a shimmering sword and a broad shield engraved with the symbol of the Sacred Flame.

-     - **Personality Trait.** I act with determined calm and respect. Little rouses my anger, instead I respond with disappointment when others incite my ire.    
-     - **Ideal.** I believe that good-hearted people can set aside their differences to work together.    
-     - **Bond.** I am willing to lay down my life for a just and righteous cause.    
-     - **Flaw.** I will never give up on my comrades. I do not trade lives.    

```statblock
"name": "Knight-Captain Theodore Marshal (DoDk)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "20"
"ac_class": "[plate](/3-Mechanics/CLI/items/plate-armor.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "255"
"hit_dice": "30d8 + 120"
"stats":
- !!int "20"
- !!int "10"
- !!int "18"
- !!int "13"
- !!int "15"
- !!int "19"
"speed": "30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "7"
"skillsaves":
  "Athletics": !!int "10"
  "Animal Handling": !!int "7"
  "Insight": !!int "7"
  "Persuasion": !!int "9"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "passive Perception 12"
"languages": "Celestial, Common"
"cr": "15"
"traits":
- "desc": "Theodore Marshal is a 20th-level spellcaster. His spellcasting ability\
    \ is Charisma (spell save DC 17, +9 to hit with spell attacks). He has the following\
    \ paladin spells prepared:\n\n1st level (4 slots): [bless](/3-Mechanics/CLI/spells/bless.md),\
    \ [command](/3-Mechanics/CLI/spells/command.md), [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [guiding bolt](/3-Mechanics/CLI/spells/guiding-bolt.md)\n\n2nd level (3 slots):\
    \ [aid](/3-Mechanics/CLI/spells/aid.md), [branding smite](/3-Mechanics/CLI/spells/branding-smite.md),\
    \ [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md)\n\n3rd\
    \ level (3 slots): [beacon of hope](/3-Mechanics/CLI/spells/beacon-of-hope.md),\
    \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md)\n\n4th level (3 slots):\
    \ [banishment](/3-Mechanics/CLI/spells/banishment.md), [death ward](/3-Mechanics/CLI/spells/death-ward.md)\n\
    \n5th level (2 slots): [flame strike](/3-Mechanics/CLI/spells/flame-strike.md),\
    \ [hallow](/3-Mechanics/CLI/spells/hallow.md)"
  "name": "Spellcasting"
- "desc": "Theodore Marshal's weapon attacks are magical. When he hits with any weapon,\
    \ the weapon deals an extra 4d8 radiant damage (included in the attack)."
  "name": "Divine Strikes"
- "desc": "If Theodore Marshal fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Theodore Marshal wields a [holy avenger longsword](/3-Mechanics/CLI/items/holy-avenger.md)."
  "name": "Special Equipment"
"actions":
- "desc": "Theodore Marshal makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 12\
    \ (1d8 + 8) slashing damage plus 18 (4d8) radiant damage."
  "name": "Holy Avenger"
"legendary_actions":
- "desc": "Theodore Marshal makes one weapon attack."
  "name": "Attack"
- "desc": "Theodore Marshal casts [guiding bolt](/3-Mechanics/CLI/spells/guiding-bolt.md)\
    \ without expending a spell slot."
  "name": "Holy Bolt (Costs 2 actions)"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/knight-captain-theodore-marshal-dodk.webp"
```
^statblock