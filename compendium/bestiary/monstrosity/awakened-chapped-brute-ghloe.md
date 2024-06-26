---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Awakened Chapped Brute"]
---
# [Awakened Chapped Brute](3-Mechanics\CLI\bestiary\monstrosity/awakened-chapped-brute-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 68*  

> [!quote]-  
> 
> The callused skin of the merchant's hulking bodyguard ripples as if something beneath is trying to wriggle free.

## Salvage

Chapped brutes rarely carry treasure or equipment unless doing so as instructed by their master. An accomplished leatherworker can fashion the callused skin of a chapped brute into+1 armor—leather, studded leather, or hide—that grants the wearer resistance to necrotic damage and doesn't require attunement. This armor takes 10 extra days of work to fashion, and magical components worth 100 gp must be expended in its creation.

## Lore

- **DC 10 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** The magical and alchemical process that creates these brutes leaves them resistant to necrotic damage.  
- **DC 15 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** These beings are so volatile because of their creation process that when they are killed, they have a chance to transform into larger, deadlier forms.  
- **DC 20 Wisdom ([Medicine](/3-Mechanics/CLI/rules/skills.md#Medicine)).** The final form of the chapped brute has a life force that fluctuates, so that it randomly gains and loses life force every few seconds.  

> [!note] GM Advice
> 
> You can use any chapped brute form as part of an encounter. You can also build encounters in which one chapped brute transforms into one or both of its larger forms. To do so, treat each form as a separate monster. Transformation can take up to 1 minute, allowing you to stagger the encounters, but it can occur as quickly as you need it to for your game.
^gm-advice

```statblock
"name": "Awakened Chapped Brute (GHLoE)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "12d10 + 60"
"stats":
- !!int "20"
- !!int "10"
- !!int "20"
- !!int "5"
- !!int "10"
- !!int "5"
"speed": "40 ft."
"skillsaves":
  "Athletics": !!int "8"
"damage_resistances": "necrotic"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "understands one language but can't speak"
"cr": "7"
"traits":
- "desc": "The awakened chapped brute has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell. While [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened)\
    \ and unable to smell, the brute can't use its blindsight."
  "name": "Keen Hearing and Smell"
- "desc": "The awakened chapped brute has advantage on Strength and Dexterity saving\
    \ throws made against effects that would knock it [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Sure-Footed"
"actions":
- "desc": "The awakened chapped brute makes two tentacle attacks or one tentacle slam."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 18\
    \ (3d8 + 5) bludgeoning damage. If the target is Medium or smaller, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the brute can't use the tentacle against another target. The awakened chapped\
    \ brute has two tentacles."
  "name": "Tentacle"
- "desc": "The awakened chapped brute slams one or two targets [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by it into a solid object or each other. Each target must make a DC 16 Strength\
    \ saving throw. If the saving throw fails, the target takes 18 (3d8 + 5) bludgeoning\
    \ damage and is [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned) until\
    \ the end of the awakened chapped brute's next turn. On a successful saving throw,\
    \ the target takes half the damage and isn't [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)."
  "name": "Tentacle Slam"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/awakened-chapped-brute-ghloe.webp"
```
^statblock