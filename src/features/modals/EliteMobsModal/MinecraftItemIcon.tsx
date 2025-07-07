import React from "react";
import { Box } from "@mantine/core";

// Mapeamento de materiais para emojis/unicode do Minecraft
const minecraftIcons: Record<string, string> = {
  // Espadas
  DIAMOND_SWORD: "🗡️",
  IRON_SWORD: "⚔️",
  GOLDEN_SWORD: "⚔️",
  WOODEN_SWORD: "⚔️",
  STONE_SWORD: "⚔️",
  NETHERITE_SWORD: "🗡️",

  // Machados
  DIAMOND_AXE: "🪓",
  IRON_AXE: "🪓",
  GOLDEN_AXE: "🪓",
  WOODEN_AXE: "🪓",
  STONE_AXE: "🪓",
  NETHERITE_AXE: "🪓",

  // Pás
  DIAMOND_SHOVEL: "⛏️",
  IRON_SHOVEL: "⛏️",
  GOLDEN_SHOVEL: "⛏️",
  WOODEN_SHOVEL: "⛏️",
  STONE_SHOVEL: "⛏️",
  NETHERITE_SHOVEL: "⛏️",

  // Picaretas
  DIAMOND_PICKAXE: "⛏️",
  IRON_PICKAXE: "⛏️",
  GOLDEN_PICKAXE: "⛏️",
  WOODEN_PICKAXE: "⛏️",
  STONE_PICKAXE: "⛏️",
  NETHERITE_PICKAXE: "⛏️",

  // Arcos
  BOW: "🏹",
  CROSSBOW: "🏹",

  // Armaduras - Capacete
  DIAMOND_HELMET: "🪖",
  IRON_HELMET: "🪖",
  GOLDEN_HELMET: "🪖",
  LEATHER_HELMET: "🪖",
  CHAINMAIL_HELMET: "🪖",
  NETHERITE_HELMET: "🪖",
  TURTLE_HELMET: "🪖",

  // Armaduras - Peitoral
  DIAMOND_CHESTPLATE: "👕",
  IRON_CHESTPLATE: "👕",
  GOLDEN_CHESTPLATE: "👕",
  LEATHER_CHESTPLATE: "👕",
  CHAINMAIL_CHESTPLATE: "👕",
  NETHERITE_CHESTPLATE: "👕",
  ELYTRA: "🦋",

  // Armaduras - Calças
  DIAMOND_LEGGINGS: "👖",
  IRON_LEGGINGS: "👖",
  GOLDEN_LEGGINGS: "👖",
  LEATHER_LEGGINGS: "👖",
  CHAINMAIL_LEGGINGS: "👖",
  NETHERITE_LEGGINGS: "👖",

  // Armaduras - Botas
  DIAMOND_BOOTS: "👢",
  IRON_BOOTS: "👢",
  GOLDEN_BOOTS: "👢",
  LEATHER_BOOTS: "👢",
  CHAINMAIL_BOOTS: "👢",
  NETHERITE_BOOTS: "👢",

  // Escudos
  SHIELD: "🛡️",

  // Varinhas
  STICK: "🪄",
  BLAZE_ROD: "🔥",

  // Poções
  POTION: "🧪",
  SPLASH_POTION: "🧪",
  LINGERING_POTION: "🧪",

  // Comida
  APPLE: "🍎",
  GOLDEN_APPLE: "🍎",
  ENCHANTED_GOLDEN_APPLE: "🍎",
  BREAD: "🍞",
  COOKIE: "🍪",
  CAKE: "🎂",
  PUMPKIN_PIE: "🥧",

  // Blocos especiais
  DIAMOND: "💎",
  EMERALD: "💎",
  RUBY: "💎",
  AMETHYST_SHARD: "💎",
  QUARTZ: "💎",
  LAPIS_LAZULI: "💎",

  // Itens especiais
  BOOK: "📚",
  ENCHANTED_BOOK: "📚",
  COMPASS: "🧭",
  CLOCK: "🕐",
  MAP: "🗺️",
  FISHING_ROD: "🎣",
  FLINT_AND_STEEL: "🔥",
  SHEARS: "✂️",
  BUCKET: "🪣",
  WATER_BUCKET: "💧",
  LAVA_BUCKET: "🌋",
  MILK_BUCKET: "🥛",

  // Default
  DEFAULT: "📦"
};

interface MinecraftItemIconProps {
  material: string;
  size?: number;
  style?: React.CSSProperties;
}

export const MinecraftItemIcon: React.FC<MinecraftItemIconProps> = ({ 
  material, 
  size = 24,
  style = {}
}) => {
  const icon = minecraftIcons[material] || minecraftIcons.DEFAULT;
  
  return (
    <Box
      style={{
        fontSize: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        ...style
      }}
    >
      {icon}
    </Box>
  );
};

export default MinecraftItemIcon; 