---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Lord Commander Elias Drexel"]
---
# [Lord Commander Elias Drexel](3-Mechanics\CLI\bestiary\humanoid/lord-commander-elias-drexel-dodk.md)
*Source: Dungeons of Drakkenheim p. 214*  

Lord Commander Elias Drexel is a man in his early fifties. He is stocky and imposing with a furrowed brow and a grim frown on his wide and angular face. His harsh features are framed with a thick moustache, side chops, and a mane of long braided brown hair. He is garbed in chainmail armour with heavy leather gloves and boots, worn under a fur-lined dark green cloak and iron pauldrons. He wears a pinned brooch - the Lord Commander's Badge, the symbol of his office. A quiver, a longbow, and two longswords are strung on his back.

-     - **Personality Trait.** I am blunt and direct, and expect my soldiers to obey my commands and deliver results promptly. I find no humor in anything.    
-     - **Ideal.** Loyalty and trust are priceless. They must be carefully given, but staunchly held. There is nothing worse than betrayal and treason.    
-     - **Bond.** During the Civil War, I switched sides and killed several scions of House von Kessel who could have claimed the throne. I once believed it was for the right cause, but now I feel personally responsible for breaking the royal line. My mission in Drakkenheim is penance and redemption.    
-     - **Flaw.** I'm filled with rage and conflict because of my contradictory actions and beliefs, and I don't take defeat, setbacks, or even missteps lightly.    

Lord Commander Elias Drexel was appointed to the office of Lord Commander before the fall of Drakkenheim, and was outside the city leading training drills when the meteor fell. Afterwards, he took part in three military expeditions to reclaim Drakkenheim, and saw firsthand their horrors. He then went on to fight in the Westemär Civil War alongside Mannfred von Kessel. However, the idea that his soldiers died for nothing in Drakkenheim festered in his mind, and made him doubt Mannfred's ability to be a good ruler. He secretly participated in a successful conspiracy to assassinate Mannfred von Kessel. Little did he know that shortly thereafter, tragedy would soon befall Cecilia von Kessel. He isn't exactly proud of his choice to betray Mannfred, and that causes him considerable guilt, regret, and internal self-loathing.

```statblock
"name": "Lord Commander Elias Drexel (DoDk)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Neutral"
"ac": !!int "19"
"ac_class": "[+3 breastplate](/3-Mechanics/CLI/items/3-armor.md)"
"hp": !!int "255"
"hit_dice": "30d8 + 120"
"stats":
- !!int "18"
- !!int "15"
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "11"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "8"
  "Strength": !!int "9"
"skillsaves":
  "Athletics": !!int "9"
  "Stealth": !!int "12"
  "Perception": !!int "13"
  "Survival": !!int "8"
"senses": "blindsight 10 ft., passive Perception 23"
"languages": "Common"
"cr": "15"
"traits":
- "desc": "Elias Drexel is a 20th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 16, +8 to hit with spell attacks). He knows the following ranger\
    \ spells:\n\n1st level (4 slots): [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [fog cloud](/3-Mechanics/CLI/spells/fog-cloud.md), [hunter's mark](/3-Mechanics/CLI/spells/hunters-mark.md)\n\
    \n2nd level (3 slots): [pass without trace](/3-Mechanics/CLI/spells/pass-without-trace.md),\
    \ [protection from poison](/3-Mechanics/CLI/spells/protection-from-poison.md),\
    \ [spike growth](/3-Mechanics/CLI/spells/spike-growth.md)\n\n3rd level (3 slots):\
    \ [conjure animals](/3-Mechanics/CLI/spells/conjure-animals.md), [nondetection](/3-Mechanics/CLI/spells/nondetection.md)\n\
    \n4th level (3 slots): [freedom of movement](/3-Mechanics/CLI/spells/freedom-of-movement.md),\
    \ [stoneskin](/3-Mechanics/CLI/spells/stoneskin.md)\n\n5th level (2 slots):\
    \ [tree stride](/3-Mechanics/CLI/spells/tree-stride.md) (works on buildings instead\
    \ of trees)"
  "name": "Spellcasting"
- "desc": "At the start of each of his turns, Elias Drexel regains 10 hit points if\
    \ he has no more than half of his hit points left. He does not gain this benefit\
    \ if he has 0 hit points."
  "name": "Survivor"
- "desc": "A melee weapon deals one extra die of its damage when Elias Drexel hits\
    \ with it (included in the attack)."
  "name": "Brute"
- "desc": "If Elias Drexel fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Elias Drexel wields a [+3 Longsword](/3-Mechanics/CLI/items/3-weapon.md),\
    \ wears a [+3 breastplate](/3-Mechanics/CLI/items/3-armor.md) and the [Lord Commander's\
    \ Badge](/3-Mechanics/CLI/items/lord-commanders-badge-dodk.md)."
  "name": "Special Equipment"
"actions":
- "desc": "Elias Drexel uses Leadership. He then makes four attacks with either his\
    \ longsword or his longbow."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 16\
    \ (2d8 + 7) slashing damage."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit:\
    \ 7 (1d8 + 2) piercing damage."
  "name": "Longbow"
- "desc": "For 1 minute, Elias Drexel can utter a special command or warning whenever\
    \ a nonhostile creature that he can see within 120 feet of him makes an attack\
    \ roll or a saving throw. The creature can add a d4 to its roll provided it\
    \ can hear and understand Elias Drexel. A creature can benefit from only one Leadership\
    \ die at a time. This effect ends if Elias Drexel is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Leadership (Recharges after a Short or Long Rest)"
"reactions":
- "desc": "Elias Drexel adds 5 to his AC against one melee attack that would hit him.\
    \ To do so, Elias Drexel must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"legendary_actions":
- "desc": "Elias Drexel makes one weapon attack."
  "name": "Attack"
- "desc": "Elias Drexel chooses one ally he can see. If that ally can see and hear\
    \ him, that ally can make one weapon attack as a reaction and gains advantage\
    \ on the attack roll. The attack deals an extra 10 3d6 damage on a hit."
  "name": "Command"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/lord-commander-elias-drexel-dodk.webp"
```
^statblock