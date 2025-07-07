export interface EliteMobsTemplate {
  name: string;
  description: string;
  material: string;
  type: string;
  dropWeight: number;
  scalability: string;
  lore: string[];
  enchantments: string[];
  potionEffects?: string[];
  customModelId?: string;
  customModelV2?: string;
  permission?: string;
  soulbound: boolean;
}

export const eliteMobsTemplates: EliteMobsTemplate[] = [
  {
    name: "Challenger's Sword",
    description: "Sword awarded to those who challenge the Wood League Arena",
    material: "DIAMOND_SWORD",
    type: "UNIQUE",
    dropWeight: 1,
    scalability: "scalable",
    lore: ["&2Awarded to those who challenge the", "&2Wood League Arena!"],
    enchantments: [
      "SHARPNESS,5",
      "KNOCKBACK,2",
      "MENDING,1",
      "LIGHTNING,3",
      "SWEEPING_EDGE,1",
      "UNBREAKING,5",
    ],
    potionEffects: ["POISON,0,target,onHit", "HEAL,1,self,onHit", "NIGHT_VISION,0,self,continuous"],
    customModelId: "challenger_sword",
    customModelV2: "elitemobs:equipment/challenger_sword",
    permission: "elitemobs.item.challenger_sword",
    soulbound: true,
  },
  {
    name: "Challenger's Chestplate",
    description: "Chestplate awarded to those who challenge the Wood League Arena",
    material: "DIAMOND_CHESTPLATE",
    type: "UNIQUE",
    dropWeight: 1,
    scalability: "scalable",
    lore: ["&2Awarded to those who challenge the", "&2Wood League Arena!"],
    enchantments: [
      "PROTECTION,5",
      "BLAST_PROTECTION,4",
      "PROJECTILE_PROTECTION,4",
      "MENDING,1",
      "UNBREAKING,5",
    ],
    customModelId: "challenger_chestplate",
    customModelV2: "elitemobs:equipment/challenger_chestplate",
    permission: "elitemobs.item.challenger_chestplate",
    soulbound: true,
  },
  {
    name: "Challenger's Helmet",
    description: "Helmet awarded to those who challenge the Wood League Arena",
    material: "DIAMOND_HELMET",
    type: "UNIQUE",
    dropWeight: 1,
    scalability: "scalable",
    lore: ["&2Awarded to those who challenge the", "&2Wood League Arena!"],
    enchantments: [
      "PROTECTION,5",
      "BLAST_PROTECTION,4",
      "PROJECTILE_PROTECTION,4",
      "MENDING,1",
      "UNBREAKING,5",
    ],
    customModelId: "challenger_helmet",
    customModelV2: "elitemobs:equipment/challenger_helmet",
    permission: "elitemobs.item.challenger_helmet",
    soulbound: true,
  },
  {
    name: "Challenger's Leggings",
    description: "Leggings awarded to those who challenge the Wood League Arena",
    material: "DIAMOND_LEGGINGS",
    type: "UNIQUE",
    dropWeight: 1,
    scalability: "scalable",
    lore: ["&2Awarded to those who challenge the", "&2Wood League Arena!"],
    enchantments: [
      "PROTECTION,5",
      "BLAST_PROTECTION,4",
      "PROJECTILE_PROTECTION,4",
      "MENDING,1",
      "UNBREAKING,5",
    ],
    customModelId: "challenger_leggings",
    customModelV2: "elitemobs:equipment/challenger_leggings",
    permission: "elitemobs.item.challenger_leggings",
    soulbound: true,
  },
  {
    name: "Challenger's Boots",
    description: "Boots awarded to those who challenge the Wood League Arena",
    material: "DIAMOND_BOOTS",
    type: "UNIQUE",
    dropWeight: 1,
    scalability: "scalable",
    lore: ["&2Awarded to those who challenge the", "&2Wood League Arena!"],
    enchantments: [
      "PROTECTION,5",
      "BLAST_PROTECTION,4",
      "PROJECTILE_PROTECTION,4",
      "MENDING,1",
      "UNBREAKING,5",
    ],
    customModelId: "challenger_boots",
    customModelV2: "elitemobs:equipment/challenger_boots",
    permission: "elitemobs.item.challenger_boots",
    soulbound: true,
  },
  {
    name: "Berserker Charm",
    description: "Charm that grants special powers in combat",
    material: "TOTEM_OF_UNDYING",
    type: "SPECIAL",
    dropWeight: 1,
    scalability: "fixed",
    lore: [
      "&aLose yourself in the face of",
      "&aoverwhelming adversity in more",
      "&aways than one...",
    ],
    enchantments: ["VANISHING_CURSE,1"],
    customModelId: "berserker_charm",
    customModelV2: "elitemobs:equipment/berserker_charm",
    permission: "elitemobs.item.berserker_charm",
    soulbound: true,
  },
];

export const getTemplateByName = (name: string): EliteMobsTemplate | undefined => {
  return eliteMobsTemplates.find(template => template.name === name);
};

export const getRandomTemplate = (): EliteMobsTemplate => {
  const randomIndex = Math.floor(Math.random() * eliteMobsTemplates.length);
  return eliteMobsTemplates[randomIndex];
};
