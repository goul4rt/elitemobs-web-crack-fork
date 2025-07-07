import React from "react";
import { Box, Image } from "@mantine/core";

// Mapeamento de materiais para nomes de sprites do Minecraft
const minecraftSprites: Record<string, string> = {
  // Espadas
  DIAMOND_SWORD: "diamond_sword",
  IRON_SWORD: "iron_sword",
  GOLDEN_SWORD: "golden_sword",
  WOODEN_SWORD: "wooden_sword",
  STONE_SWORD: "stone_sword",
  NETHERITE_SWORD: "netherite_sword",

  // Machados
  DIAMOND_AXE: "diamond_axe",
  IRON_AXE: "iron_axe",
  GOLDEN_AXE: "golden_axe",
  WOODEN_AXE: "wooden_axe",
  STONE_AXE: "stone_axe",
  NETHERITE_AXE: "netherite_axe",

  // Pás
  DIAMOND_SHOVEL: "diamond_shovel",
  IRON_SHOVEL: "iron_shovel",
  GOLDEN_SHOVEL: "golden_shovel",
  WOODEN_SHOVEL: "wooden_shovel",
  STONE_SHOVEL: "stone_shovel",
  NETHERITE_SHOVEL: "netherite_shovel",

  // Picaretas
  DIAMOND_PICKAXE: "diamond_pickaxe",
  IRON_PICKAXE: "iron_pickaxe",
  GOLDEN_PICKAXE: "golden_pickaxe",
  WOODEN_PICKAXE: "wooden_pickaxe",
  STONE_PICKAXE: "stone_pickaxe",
  NETHERITE_PICKAXE: "netherite_pickaxe",

  // Arcos
  BOW: "bow",
  CROSSBOW: "crossbow",

  // Armaduras - Capacete
  DIAMOND_HELMET: "diamond_helmet",
  IRON_HELMET: "iron_helmet",
  GOLDEN_HELMET: "golden_helmet",
  LEATHER_HELMET: "leather_helmet",
  CHAINMAIL_HELMET: "chainmail_helmet",
  NETHERITE_HELMET: "netherite_helmet",
  TURTLE_HELMET: "turtle_helmet",

  // Armaduras - Peitoral
  DIAMOND_CHESTPLATE: "diamond_chestplate",
  IRON_CHESTPLATE: "iron_chestplate",
  GOLDEN_CHESTPLATE: "golden_chestplate",
  LEATHER_CHESTPLATE: "leather_chestplate",
  CHAINMAIL_CHESTPLATE: "chainmail_chestplate",
  NETHERITE_CHESTPLATE: "netherite_chestplate",
  ELYTRA: "elytra",

  // Armaduras - Calças
  DIAMOND_LEGGINGS: "diamond_leggings",
  IRON_LEGGINGS: "iron_leggings",
  GOLDEN_LEGGINGS: "golden_leggings",
  LEATHER_LEGGINGS: "leather_leggings",
  CHAINMAIL_LEGGINGS: "chainmail_leggings",
  NETHERITE_LEGGINGS: "netherite_leggings",

  // Armaduras - Botas
  DIAMOND_BOOTS: "diamond_boots",
  IRON_BOOTS: "iron_boots",
  GOLDEN_BOOTS: "golden_boots",
  LEATHER_BOOTS: "leather_boots",
  CHAINMAIL_BOOTS: "chainmail_boots",
  NETHERITE_BOOTS: "netherite_boots",

  // Escudos
  SHIELD: "shield",

  // Varinhas
  STICK: "stick",
  BLAZE_ROD: "blaze_rod",

  // Poções
  POTION: "potion",
  SPLASH_POTION: "splash_potion",
  LINGERING_POTION: "lingering_potion",

  // Comida
  APPLE: "apple",
  GOLDEN_APPLE: "golden_apple",
  ENCHANTED_GOLDEN_APPLE: "enchanted_golden_apple",
  BREAD: "bread",
  COOKIE: "cookie",
  CAKE: "cake",
  PUMPKIN_PIE: "pumpkin_pie",

  // Blocos especiais
  DIAMOND: "diamond",
  EMERALD: "emerald",
  RUBY: "ruby",
  AMETHYST_SHARD: "amethyst_shard",
  QUARTZ: "quartz",
  LAPIS_LAZULI: "lapis_lazuli",

  // Itens especiais
  BOOK: "book",
  ENCHANTED_BOOK: "enchanted_book",
  COMPASS: "compass",
  CLOCK: "clock",
  MAP: "map",
  FISHING_ROD: "fishing_rod",
  FLINT_AND_STEEL: "flint_and_steel",
  SHEARS: "shears",
  BUCKET: "bucket",
  WATER_BUCKET: "water_bucket",
  LAVA_BUCKET: "lava_bucket",
  MILK_BUCKET: "milk_bucket",

  // Default
  DEFAULT: "diamond_sword",
};

interface MinecraftItemSpriteProps {
  material: string;
  size?: number;
  style?: React.CSSProperties;
  fallbackToIcon?: boolean;
}

export const MinecraftItemSprite: React.FC<MinecraftItemSpriteProps> = ({
  material,
  size = 32,
  style = {},
  fallbackToIcon = true,
}) => {
  const spriteName = minecraftSprites[material] || minecraftSprites.DEFAULT;

  // URLs para sprites do Minecraft (usando APIs públicas)
  const spriteUrls = {
    // API do Minecraft Wiki
    wiki: `https://static.wikia.nocookie.net/minecraft_gamepedia/images/${spriteName}.png`,
    // API alternativa
    alternative: `https://minecraftitemids.com/item/64/${spriteName}.png`,
    // API do Minecraft Tools
    tools: `https://minecraft.tools/en/items.php?item=${spriteName}`,
  };

  const [imageError, setImageError] = React.useState(false);
  const [currentUrl, setCurrentUrl] = React.useState(spriteUrls.wiki);

  const handleImageError = () => {
    if (currentUrl === spriteUrls.wiki) {
      setCurrentUrl(spriteUrls.alternative);
    } else if (currentUrl === spriteUrls.alternative) {
      setImageError(true);
    }
  };

  // Fallback para emoji se a imagem falhar
  if (imageError && fallbackToIcon) {
    const fallbackIcons: Record<string, string> = {
      DIAMOND_SWORD: "🗡️",
      IRON_SWORD: "⚔️",
      GOLDEN_SWORD: "⚔️",
      WOODEN_SWORD: "⚔️",
      STONE_SWORD: "⚔️",
      NETHERITE_SWORD: "🗡️",
      DIAMOND_AXE: "🪓",
      IRON_AXE: "🪓",
      GOLDEN_AXE: "🪓",
      WOODEN_AXE: "🪓",
      STONE_AXE: "🪓",
      NETHERITE_AXE: "🪓",
      DIAMOND_PICKAXE: "⛏️",
      IRON_PICKAXE: "⛏️",
      GOLDEN_PICKAXE: "⛏️",
      WOODEN_PICKAXE: "⛏️",
      STONE_PICKAXE: "⛏️",
      NETHERITE_PICKAXE: "⛏️",
      BOW: "🏹",
      CROSSBOW: "🏹",
      DIAMOND_HELMET: "🪖",
      IRON_HELMET: "🪖",
      GOLDEN_HELMET: "🪖",
      LEATHER_HELMET: "🪖",
      CHAINMAIL_HELMET: "🪖",
      NETHERITE_HELMET: "🪖",
      TURTLE_HELMET: "🪖",
      DIAMOND_CHESTPLATE: "👕",
      IRON_CHESTPLATE: "👕",
      GOLDEN_CHESTPLATE: "👕",
      LEATHER_CHESTPLATE: "👕",
      CHAINMAIL_CHESTPLATE: "👕",
      NETHERITE_CHESTPLATE: "👕",
      ELYTRA: "🦋",
      DIAMOND_LEGGINGS: "👖",
      IRON_LEGGINGS: "👖",
      GOLDEN_LEGGINGS: "👖",
      LEATHER_LEGGINGS: "👖",
      CHAINMAIL_LEGGINGS: "👖",
      NETHERITE_LEGGINGS: "👖",
      DIAMOND_BOOTS: "👢",
      IRON_BOOTS: "👢",
      GOLDEN_BOOTS: "👢",
      LEATHER_BOOTS: "👢",
      CHAINMAIL_BOOTS: "👢",
      NETHERITE_BOOTS: "👢",
      SHIELD: "🛡️",
      STICK: "🪄",
      BLAZE_ROD: "🔥",
      POTION: "🧪",
      SPLASH_POTION: "🧪",
      LINGERING_POTION: "🧪",
      APPLE: "🍎",
      GOLDEN_APPLE: "🍎",
      ENCHANTED_GOLDEN_APPLE: "🍎",
      BREAD: "🍞",
      COOKIE: "🍪",
      CAKE: "🎂",
      PUMPKIN_PIE: "🥧",
      DIAMOND: "💎",
      EMERALD: "💎",
      RUBY: "💎",
      AMETHYST_SHARD: "💎",
      QUARTZ: "💎",
      LAPIS_LAZULI: "💎",
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
      DEFAULT: "📦",
    };

    const fallbackIcon = fallbackIcons[material] || fallbackIcons.DEFAULT;

    return (
      <Box
        style={{
          fontSize: size,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: size,
          height: size,
          ...style,
        }}
      >
        {fallbackIcon}
      </Box>
    );
  }

  return (
    <Image
      src={currentUrl}
      alt={`${material} sprite`}
      width={size}
      height={size}
      style={{
        imageRendering: "pixelated",
        ...style,
      }}
      onError={handleImageError}
      fallbackSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjNjY2NjY2Ii8+Cjx0ZXh0IHg9IjE2IiB5PSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4pyFPC90ZXh0Pgo8L3N2Zz4K"
    />
  );
};

export default MinecraftItemSprite;
