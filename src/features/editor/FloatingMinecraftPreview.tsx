import React, { useEffect, useState } from "react";
import { Paper, Stack, Text, Badge, Group, Box } from "@mantine/core";
import { FaDice } from "react-icons/fa6";
import useFile from "../../store/useFile";
import { MinecraftItemSprite } from "../modals/EliteMobsModal/MinecraftItemSprite";
import { MinecraftText } from "../modals/EliteMobsModal/index";

interface EliteMobsItemData {
  material?: string;
  name?: string;
  lore?: string[];
  enchantments?: string[];
  potionEffects?: string[];
  itemType?: string;
  level?: number;
  dropWeight?: string;
  scalability?: string;
  customModelID?: number;
  customModelV2?: string;
  permission?: string;
  soulbound?: boolean;
  isEnabled?: boolean;
}

export const FloatingMinecraftPreview: React.FC = () => {
  const contents = useFile(state => state.contents);
  const [itemData, setItemData] = useState<EliteMobsItemData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!contents) {
      setIsVisible(false);
      return;
    }

    try {
      // Tenta fazer parse do conteúdo como YAML/JSON
      let parsed: any = null;

      // Se parece ser YAML, tenta converter
      if (contents.includes("material:") && contents.includes("name:")) {
        // Simples parsing de YAML para detectar item EliteMobs
        const lines = contents.split("\n");
        const item: EliteMobsItemData = {};

        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith("material:")) {
            item.material = trimmed.replace("material:", "").trim();
          } else if (trimmed.startsWith("name:")) {
            item.name = trimmed.replace("name:", "").trim().replace(/'/g, "");
          } else if (trimmed.startsWith("itemType:")) {
            item.itemType = trimmed.replace("itemType:", "").trim();
          } else if (trimmed.startsWith("level:")) {
            item.level = parseInt(trimmed.replace("level:", "").trim());
          } else if (trimmed.startsWith("dropWeight:")) {
            item.dropWeight = trimmed.replace("dropWeight:", "").trim().replace(/'/g, "");
          } else if (trimmed.startsWith("scalability:")) {
            item.scalability = trimmed.replace("scalability:", "").trim();
          } else if (trimmed.startsWith("soulbound:")) {
            item.soulbound = trimmed.replace("soulbound:", "").trim() === "true";
          } else if (trimmed.startsWith("isEnabled:")) {
            item.isEnabled = trimmed.replace("isEnabled:", "").trim() === "true";
          } else if (trimmed.startsWith("customModelID:")) {
            item.customModelID = parseInt(trimmed.replace("customModelID:", "").trim());
          } else if (trimmed.startsWith("customModelV2:")) {
            item.customModelV2 = trimmed.replace("customModelV2:", "").trim();
          } else if (trimmed.startsWith("permission:")) {
            item.permission = trimmed.replace("permission:", "").trim();
          }
        }

        // Coleta lore
        const loreStart = lines.findIndex(line => line.trim() === "lore:");
        if (loreStart !== -1) {
          item.lore = [];
          for (let i = loreStart + 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith("-")) {
              item.lore.push(line.replace("-", "").trim().replace(/'/g, ""));
            } else if (line && !line.startsWith("#")) {
              break;
            }
          }
        }

        // Coleta encantamentos
        const enchStart = lines.findIndex(line => line.trim() === "enchantments:");
        if (enchStart !== -1) {
          item.enchantments = [];
          for (let i = enchStart + 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith("-")) {
              item.enchantments.push(line.replace("-", "").trim());
            } else if (line && !line.startsWith("#")) {
              break;
            }
          }
        }

        // Coleta efeitos de poção
        const potionStart = lines.findIndex(line => line.trim() === "potionEffects:");
        if (potionStart !== -1) {
          item.potionEffects = [];
          for (let i = potionStart + 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith("-")) {
              item.potionEffects.push(line.replace("-", "").trim());
            } else if (line && !line.startsWith("#")) {
              break;
            }
          }
        }

        parsed = item;
      } else {
        // Tenta como JSON
        parsed = JSON.parse(contents);
      }

      // Verifica se é um item EliteMobs válido
      if (parsed && parsed.material && parsed.name) {
        setItemData(parsed);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } catch (error) {
      setIsVisible(false);
    }
  }, [contents]);

  if (!isVisible || !itemData) {
    return null;
  }

  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      style={{
        position: "fixed",
        top: "100px",
        right: "20px",
        width: "300px",
        zIndex: 5,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        border: "2px solid #666",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Stack gap="sm">
        <Group justify="space-between" align="center">
          <Text size="sm" fw={600} c="white">
            🎮 Preview EliteMobs
          </Text>
          <Badge size="xs" variant="light" color="green">
            <FaDice size={10} />
          </Badge>
        </Group>

        <Box style={{ backgroundColor: "#1a1a1a", padding: "12px", borderRadius: "4px" }}>
          <Stack gap="xs">
            {/* Ícone e Nome */}
            {itemData.name && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MinecraftItemSprite material={itemData.material || "DIAMOND_SWORD"} size={24} />
                <MinecraftText text={itemData.name} />
              </div>
            )}

            {/* Lore */}
            {itemData.lore && itemData.lore.length > 0 && (
              <div>
                {itemData.lore.map((line, index) => (
                  <div key={index} style={{ marginBottom: "2px" }}>
                    <MinecraftText text={line} />
                  </div>
                ))}
              </div>
            )}

            {/* Encantamentos */}
            {itemData.enchantments && itemData.enchantments.length > 0 && (
              <div>
                <div style={{ marginTop: "6px", marginBottom: "2px" }}>
                  <MinecraftText text="&7Encantamentos:" />
                </div>
                {itemData.enchantments.slice(0, 3).map((ench, index) => (
                  <div key={index} style={{ marginLeft: "6px" }}>
                    <MinecraftText text={`&7- ${ench}`} />
                  </div>
                ))}
                {itemData.enchantments.length > 3 && (
                  <div style={{ marginLeft: "6px" }}>
                    <MinecraftText text={`&7... e mais ${itemData.enchantments.length - 3}`} />
                  </div>
                )}
              </div>
            )}

            {/* Efeitos de Poção */}
            {itemData.potionEffects && itemData.potionEffects.length > 0 && (
              <div>
                <div style={{ marginTop: "6px", marginBottom: "2px" }}>
                  <MinecraftText text="&7Efeitos de Poção:" />
                </div>
                {itemData.potionEffects.slice(0, 2).map((potion, index) => {
                  const parts = potion.split(",");
                  const effectName = parts[0];
                  const level = parts[1];
                  const target = parts[2];
                  const method = parts[3];

                  const getTargetIcon = (t: string) => (t === "self" ? "🛡️" : "☠️");
                  const getMethodIcon = (m: string) => (m === "onHit" ? "⚔️" : "🔄");

                  return (
                    <div key={index} style={{ marginLeft: "6px" }}>
                      <MinecraftText
                        text={`&7- ${effectName} ${level} ${getTargetIcon(target)} ${getMethodIcon(method)}`}
                      />
                    </div>
                  );
                })}
                {itemData.potionEffects.length > 2 && (
                  <div style={{ marginLeft: "6px" }}>
                    <MinecraftText text={`&7... e mais ${itemData.potionEffects.length - 2}`} />
                  </div>
                )}
              </div>
            )}

            {/* Informações do Item */}
            <div style={{ marginTop: "6px" }}>
              {itemData.itemType && (
                <div>
                  <MinecraftText text={`&7Tipo: &f${itemData.itemType}`} />
                </div>
              )}
              {itemData.level && (
                <div>
                  <MinecraftText text={`&7Nível: &f${itemData.level}`} />
                </div>
              )}
              {itemData.dropWeight && (
                <div>
                  <MinecraftText text={`&7Drop: &f${itemData.dropWeight}%`} />
                </div>
              )}
              {itemData.scalability && (
                <div>
                  <MinecraftText text={`&7Escalabilidade: &f${itemData.scalability}`} />
                </div>
              )}
              {itemData.soulbound !== undefined && (
                <div>
                  <MinecraftText text={`&7Soulbound: &f${itemData.soulbound ? "Sim" : "Não"}`} />
                </div>
              )}
            </div>
          </Stack>
        </Box>

        <Text size="xs" c="dimmed" ta="center">
          Preview automático do item EliteMobs
        </Text>
      </Stack>
    </Paper>
  );
};

export default FloatingMinecraftPreview;
