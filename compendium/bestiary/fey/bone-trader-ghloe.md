---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
aliases: ["Bone Trader"]
---
# [Bone Trader](3-Mechanics\CLI\bestiary\fey/bone-trader-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 13*  

"Do you really need all of your bones? Are you sure I couldn't just snack on a few? I'll gladly pay you for them."

## Salvage

Bone trader lairs have many, many bones. Depending on how successful and powerful the bone trader is, it may also have the equipment and belongings of people it has killed or of the minions it employs. Its bone armor is infused with a peculiar magic.

Smashing the armor into a paste and mixing it with appropriate amounts of coagulant from a herbalism kit allows it to be applied it to a shield or weapon. This paste, called [ready gunk](/3-Mechanics/CLI/items/ready-gunk-ghloe.md) (see Appendix A of Lairs of Etharis), can be completed with a successful Wisdom check (DC 10) by someone proficient with a herbalism kit. This process takes 10 minutes.

## Lore

- **DC 10 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** A bone trader is most dangerous in its lair, where it can use its collection of bones to defend itself.  
- **DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** A bone trader can charm its opponents and is often defended by a small gang of intimidated or charmed creatures.  
- **DC 20 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Like other fey, bone traders can be tantalized by a deal and may be willing to negotiate rather than fight, even if it seems to have the upper hand or is actively winning a battle  

```statblock
"name": "Bone Trader (GHLoE)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "12"
"ac_class": "15 with bone armor"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "15"
- !!int "18"
"speed": "30 ft."
"saves":
  "Constitution": !!int "2"
"skillsaves":
  "Animal Handling": !!int "4"
  "Perception": !!int "4"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Sylvan, two other languages"
"cr": "1"
"traits":
- "desc": "A bone trader in its lair can use a bonus action to summon a temporary\
    \ suit of bone armor that lasts for ten minutes or until dismissed by the bone\
    \ trader. While wearing its bone armor, a bone trader has advantage on Wisdom\
    \ saving throws and Charisma ([Intimidation](/3-Mechanics/CLI/rules/skills.md#Intimidation))\
    \ checks."
  "name": "Bone Armor (1/Day)"
- "desc": "The bone trader can communicate with beasts as if they shared a language."
  "name": "Speak with Beasts"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6\
    \ (1d8 + 2) bludgeoning damage."
  "name": "Bone Club"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4\
    \ (1d4 + 2) piercing damage. The target must succeed on a DC 10 Constitution\
    \ saving throw or have one of its bones sucked out, resulting in the piercing\
    \ damage becoming a reduction in maximum hit points until magical healing is applied."
  "name": "Skelesuck"
- "desc": "The bone trader targets one humanoid, goblinoid, fey, or beast it can see\
    \ within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw\
    \ or be magically [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed). The\
    \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed) creature regards the\
    \ bone trader as a trusted friend to be heeded and protected. Although the target\
    \ isn't under the bone trader's control, it takes the bone trader's requests or\
    \ actions in the most favorable way . Each time the bone trader or its allies\
    \ do anything harmful to the target, it can repeat the saving throw, ending the\
    \ effect on itself on a success. Otherwise, the effect lasts 24 hours or until\
    \ the bone trader dies, is on a different plane of existence from the target,\
    \ or ends the effect as a bonus action. If a target's saving throw is successful,\
    \ the target is immune to the bone trader's fey charm for the next 24 hours.\n\
    \nThe bone trader can have no more than one humanoid [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ at a time, along with up to three beasts."
  "name": "Fey Charm"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/fey/token/bone-trader-ghloe.webp"
```
^statblock