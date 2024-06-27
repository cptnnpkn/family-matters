---
NoteIcon: session
aat-render-enabled: true
fc-category: Session
fc-display-name: Session <% tp.user.getThisGameNum(tp) %>
sessionstatus: 
type: Session Journal
sessionDate: <% tp.date.now("YYYY-MM-DD") %>
players: 
Status:
  - ⏳
OneLiner: 1 Line Summary
timeslines:
  - journal
tags:
  - journal
campaign: <% tp.user.getCampaignName(tp) %>
world: <% tp.user.getThisWorld(tp) %>
sessionNum: <% tp.user.getThisGameNum(tp) %>
fc-calendar: <% tp.user.getThisWorld(tp) %>
fc-date: <% tp.user.getThisDate(tp)[0] %>-<% tp.user.getThisDate(tp)[1] %>-<% tp.user.getThisDate(tp)[2] %>
fc-end: 
long_rest: false
short_rest: false
---

<% await tp.file.move("/60 Games/62 Campaigns/62.01 Family Matters/62.01.02 Sessions/" + tp.file.title) %>

<%*
const hasTitle = !tp.file.title.startsWith("NewJournal");
let title;
if (!hasTitle) {
	title = await tp.system.prompt("Enter Date (yyyy-mm-dd)");
	await tp.file.rename(title);
} else {
	title = tp.file.title;
}
_%>

# [[<% tp.file.title %>]]

## Session Summary

> [!tldr] [[<% tp.file.title %>]]
>  ^summary

---

## Housekeeping



## Recap

![[<% tp.user.getLastGameTitle(tp) %>#^summary]]

## Strong start

> 

## Scenes

- [ ] 
- [ ] 
- [ ] 
- [ ] 

## Secrets and Clues

- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 

## Loot

- [ ] 

---

## Log

