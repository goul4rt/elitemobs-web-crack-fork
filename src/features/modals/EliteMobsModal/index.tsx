import React, { useState } from "react";
import Link from "next/link";
import type { ModalProps } from "@mantine/core";
import {
  Modal,
  Button,
  Text,
  Stack,
  Group,
  Select,
  TextInput,
  NumberInput,
  Switch,
  Badge,
  Paper,
  Grid,
  ActionIcon,
  Tooltip,
  Collapse,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { event as gaEvent } from "nextjs-google-analytics";
import { toast } from "react-hot-toast";
import { FaDice, FaPlus, FaTrash } from "react-icons/fa6";
import {
  enchantmentAPINames,
  materialAPINames,
  potionEffectsAPINames,
} from "../../../custom/minecraft";
import useFile from "../../../store/useFile";
import { MinecraftItemSprite } from "./MinecraftItemSprite";
import { eliteMobsTemplates, getRandomTemplate } from "./templates";

// Função para converter códigos de cor do Minecraft
const formatMinecraftText = (text: string) => {
  return text.replace(/&([0-9a-fk-or])/gi, "§$1");
};

// Componente para renderizar texto do Minecraft
export const MinecraftText = ({ text }: { text: string }) => {
  const formattedText = formatMinecraftText(text);

  return (
    <span
      className="minecraft-text"
      style={{
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}
      dangerouslySetInnerHTML={{
        __html: formattedText
          .replace(/§([0-9a-fk-or])/gi, '<span class="mc-$1">')
          .replace(/§r/g, "</span><span>")
          .replace(/§([0-9a-f])/gi, '</span><span class="mc-$1">')
          .replace(/§([k-or])/gi, '</span><span class="mc-$1">'),
      }}
    />
  );
};

interface EliteMobsItem {
  filename: string;
  material: string;
  name: string;
  lore: string[];
  enchantments: string[];
  potionEffects: string[];
  itemType: string;
  level?: number;
  dropWeight?: string;
  scalability: string;
  customModelID?: number;
  customModelV2?: string;
  permission?: string;
  soulbound: boolean;
  isEnabled: boolean;
}

const defaultItem: EliteMobsItem = {
  filename: "",
  material: "DIAMOND_SWORD",
  name: "",
  lore: [],
  enchantments: [],
  potionEffects: [],
  itemType: "UNIQUE",
  level: 1,
  dropWeight: "1",
  scalability: "scalable",
  customModelID: undefined,
  customModelV2: undefined,
  permission: undefined,
  soulbound: true,
  isEnabled: true,
};

export const EliteMobsModal = ({ opened, onClose }: ModalProps) => {
  const setContents = useFile(state => state.setContents);
  const [item, setItem] = useState<EliteMobsItem>(defaultItem);
  const [newLoreLine, setNewLoreLine] = useState("");
  const [newEnchantment, setNewEnchantment] = useState("");
  const [newEnchantmentLevel, setNewEnchantmentLevel] = useState<number>(1);
  const [newPotionEffect, setNewPotionEffect] = useState("");
  const [newPotionEffectLevel, setNewPotionEffectLevel] = useState<number>(0);
  const [newPotionEffectTarget, setNewPotionEffectTarget] = useState<"self" | "target">("self");
  const [newPotionEffectMethod, setNewPotionEffectMethod] = useState<"onHit" | "continuous">(
    "onHit"
  );
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [openedAdvanced, { toggle: toggleAdvanced }] = useDisclosure(false);

  const applyTemplate = (templateName: string) => {
    const template = eliteMobsTemplates.find(t => t.name === templateName);
    if (template) {
      setItem({
        filename: template.name.toLowerCase().replace(/\s+/g, "_"),
        material: template.material,
        name: template.name,
        lore: [...template.lore],
        enchantments: [...template.enchantments],
        potionEffects: template.potionEffects ? [...template.potionEffects] : [],
        itemType: template.type.toUpperCase(),
        level: 1,
        dropWeight: template.dropWeight.toString(),
        scalability: "scalable",
        customModelID: undefined,
        customModelV2: undefined,
        permission: undefined,
        soulbound: true,
        isEnabled: true,
      });
      setSelectedTemplate(templateName);
    }
  };

  const applyRandomTemplate = () => {
    const template = getRandomTemplate();
    applyTemplate(template.name);
  };

  const generateYAML = () => {
    if (!item.filename || !item.name) {
      toast.error("File name and item name are required!");
      return;
    }

    const yamlContent = `isEnabled: ${item.isEnabled}
material: ${item.material}
name: '${item.name}'
${
  item.lore.length > 0
    ? `lore:
${item.lore.map(line => `- '${line}'`).join("\n")}`
    : ""
}
${
  item.enchantments.length > 0
    ? `enchantments:
${item.enchantments.map(ench => `- ${ench}`).join("\n")}`
    : ""
}
${
  item.potionEffects.length > 0
    ? `potionEffects:
${item.potionEffects.map(potion => `- ${potion}`).join("\n")}`
    : ""
}
itemType: ${item.itemType}
${item.level ? `level: ${item.level}` : ""}
${item.dropWeight ? `dropWeight: '${item.dropWeight}'` : ""}
scalability: ${item.scalability}
${item.customModelID ? `customModelID: ${item.customModelID}` : ""}
${item.customModelV2 ? `customModelV2: ${item.customModelV2}` : ""}
${item.permission ? `permission: ${item.permission}` : ""}
soulbound: ${item.soulbound}`;

    setContents({ contents: yamlContent });
    gaEvent("generate_elitemobs_item");
    toast.success("EliteMobs item generated successfully!");
    onClose();
  };

  const addLoreLine = () => {
    if (newLoreLine.trim()) {
      setItem(prev => ({
        ...prev,
        lore: [...prev.lore, newLoreLine.trim()],
      }));
      setNewLoreLine("");
    }
  };

  const removeLoreLine = (index: number) => {
    setItem(prev => ({
      ...prev,
      lore: prev.lore.filter((_, i) => i !== index),
    }));
  };

  const addEnchantment = () => {
    if (newEnchantment.trim()) {
      setItem(prev => ({
        ...prev,
        enchantments: [...prev.enchantments, `${newEnchantment.trim()}:${newEnchantmentLevel}`],
      }));
      setNewEnchantment("");
      setNewEnchantmentLevel(1);
    }
  };

  const removeEnchantment = (index: number) => {
    setItem(prev => ({
      ...prev,
      enchantments: prev.enchantments.filter((_, i) => i !== index),
    }));
  };

  const addPotionEffect = () => {
    if (newPotionEffect.trim()) {
      setItem(prev => ({
        ...prev,
        potionEffects: [
          ...prev.potionEffects,
          `${newPotionEffect.trim()},${newPotionEffectLevel},${newPotionEffectTarget},${newPotionEffectMethod}`,
        ],
      }));
      setNewPotionEffect("");
      setNewPotionEffectLevel(0);
      setNewPotionEffectTarget("self");
      setNewPotionEffectMethod("onHit");
    }
  };

  const removePotionEffect = (index: number) => {
    setItem(prev => ({
      ...prev,
      potionEffects: prev.potionEffects.filter((_, i) => i !== index),
    }));
  };

  const resetForm = () => {
    setItem(defaultItem);
    setNewLoreLine("");
    setNewEnchantment("");
    setNewEnchantmentLevel(1);
    setNewPotionEffect("");
    setNewPotionEffectLevel(0);
    setNewPotionEffectTarget("self");
    setNewPotionEffectMethod("onHit");
    setSelectedTemplate("");
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Group>
          <FaDice size={18} />
          <Text size="md" fw={600}>
            EliteMobs Item Creator
          </Text>
        </Group>
      }
      size="95%"
      centered
      styles={{
        body: { padding: 0 },
        header: { padding: "12px 16px 0 16px" },
        content: { maxWidth: "1400px", margin: "0 auto" },
      }}
    >
      <Grid gutter="md" p="md">
        <Grid.Col span={{ base: 12, lg: 8 }}>
          <Stack gap="md">
            {/* Templates Section */}
            <Paper withBorder p="sm" radius="md">
              <Group justify="space-between" align="center" mb="xs">
                <Text fw={600} size="sm">
                  🎯 Templates
                </Text>
                <Tooltip label="Random template">
                  <ActionIcon variant="light" onClick={applyRandomTemplate} color="blue" size="sm">
                    <FaDice size={14} />
                  </ActionIcon>
                </Tooltip>
              </Group>

              <Select
                placeholder="Select a template"
                data={eliteMobsTemplates.map(t => ({ value: t.name, label: t.name }))}
                value={selectedTemplate}
                onChange={value => value && applyTemplate(value)}
                clearable
                searchable
                size="xs"
              />
            </Paper>

            {/* Basic Configuration */}
            <Paper withBorder p="sm" radius="md">
              <Text fw={600} size="sm" mb="xs">
                ⚙️ Basic Configuration
              </Text>

              <Grid gutter="xs">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="File Name"
                    placeholder="challengers_sword"
                    value={item.filename}
                    onChange={e => setItem(prev => ({ ...prev, filename: e.target.value }))}
                    required
                    size="xs"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Item Name"
                    placeholder="&cChallenger's Sword"
                    value={item.name}
                    onChange={e => setItem(prev => ({ ...prev, name: e.target.value }))}
                    required
                    size="xs"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Select
                    label="Material"
                    placeholder="Select material"
                    data={materialAPINames}
                    value={item.material}
                    onChange={value =>
                      setItem(prev => ({ ...prev, material: value || "DIAMOND_SWORD" }))
                    }
                    searchable
                    clearable
                    size="xs"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Select
                    label="Item Type"
                    data={[
                      { value: "UNIQUE", label: "Unique" },
                      { value: "SCALABLE", label: "Scalable" },
                      { value: "SPECIAL", label: "Special" },
                    ]}
                    value={item.itemType}
                    onChange={value => setItem(prev => ({ ...prev, itemType: value || "UNIQUE" }))}
                    size="xs"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 4, sm: 4 }}>
                  <NumberInput
                    label="Level"
                    placeholder="1"
                    min={1}
                    max={100}
                    value={item.level}
                    onChange={value =>
                      setItem(prev => ({ ...prev, level: (value as number) || 1 }))
                    }
                    size="xs"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 4, sm: 4 }}>
                  <NumberInput
                    label="Drop Weight (%)"
                    placeholder="1"
                    min={0.001}
                    max={100}
                    step={0.001}
                    value={parseFloat(item.dropWeight || "1")}
                    onChange={value =>
                      setItem(prev => ({ ...prev, dropWeight: value?.toString() || "1" }))
                    }
                    size="xs"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 4, sm: 4 }}>
                  <Select
                    label="Scalability"
                    data={[
                      { value: "fixed", label: "Fixed" },
                      { value: "limited", label: "Limited" },
                      { value: "scalable", label: "Scalable" },
                    ]}
                    value={item.scalability}
                    onChange={value =>
                      setItem(prev => ({ ...prev, scalability: value || "scalable" }))
                    }
                    size="xs"
                  />
                </Grid.Col>
              </Grid>
            </Paper>

            {/* Advanced Configuration */}
            <Paper withBorder p="sm" radius="md">
              <Button
                variant="subtle"
                onClick={toggleAdvanced}
                leftSection={openedAdvanced ? "▼" : "▶"}
                size="xs"
                fullWidth
                styles={{ root: { justifyContent: "flex-start", padding: "4px 8px" } }}
              >
                <Text size="sm" fw={600}>
                  🔧 Advanced Configuration
                </Text>
              </Button>

              <Collapse in={openedAdvanced}>
                <Grid gutter="xs" mt="xs">
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Switch
                      label="Soulbound"
                      checked={item.soulbound}
                      onChange={e =>
                        setItem(prev => ({ ...prev, soulbound: e.currentTarget.checked }))
                      }
                      size="xs"
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Switch
                      label="Enabled"
                      checked={item.isEnabled}
                      onChange={e =>
                        setItem(prev => ({ ...prev, isEnabled: e.currentTarget.checked }))
                      }
                      size="xs"
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <NumberInput
                      label="Custom Model ID"
                      placeholder="1"
                      min={1}
                      value={item.customModelID}
                      onChange={value =>
                        setItem(prev => ({
                          ...prev,
                          customModelID: (value as number) || undefined,
                        }))
                      }
                      size="xs"
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                      label="Custom Model V2"
                      placeholder="elitemobs:equipment/sword"
                      value={item.customModelV2}
                      onChange={e =>
                        setItem(prev => ({ ...prev, customModelV2: e.target.value || undefined }))
                      }
                      size="xs"
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <TextInput
                      label="Permission"
                      placeholder="elitemobs.item.permission"
                      value={item.permission}
                      onChange={e =>
                        setItem(prev => ({ ...prev, permission: e.target.value || undefined }))
                      }
                      size="xs"
                    />
                  </Grid.Col>
                </Grid>
              </Collapse>
            </Paper>

            {/* Lore Section */}
            <Paper withBorder p="sm" radius="md">
              <Text fw={600} size="sm" mb="xs">
                📝 Lore
              </Text>

              <Grid gutter="xs" mb="xs">
                <Grid.Col span={{ base: 9, sm: 10 }}>
                  <TextInput
                    placeholder="&2Awarded to those who challenge the Wood League Arena!"
                    value={newLoreLine}
                    onChange={e => setNewLoreLine(e.target.value)}
                    onKeyPress={e => e.key === "Enter" && addLoreLine()}
                    size="xs"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 3, sm: 2 }}>
                  <Button
                    onClick={addLoreLine}
                    leftSection={<FaPlus size={12} />}
                    size="xs"
                    fullWidth
                  >
                    Add
                  </Button>
                </Grid.Col>
              </Grid>

              {item.lore.length > 0 && (
                <Paper
                  p="xs"
                  withBorder
                  bg="gray.0"
                  style={{ maxHeight: "100px", overflowY: "auto" }}
                >
                  <Stack gap="xs">
                    {item.lore.map((line, index) => (
                      <Group key={index} justify="space-between">
                        <Text size="xs" style={{ flex: 1 }}>
                          {line}
                        </Text>
                        <ActionIcon
                          size="xs"
                          color="red"
                          variant="subtle"
                          onClick={() => removeLoreLine(index)}
                        >
                          <FaTrash size={10} />
                        </ActionIcon>
                      </Group>
                    ))}
                  </Stack>
                </Paper>
              )}
            </Paper>

            {/* Enchantments Section */}
            <Paper withBorder p="sm" radius="md">
              <Text fw={600} size="sm" mb="xs">
                ⚡ Enchantments
              </Text>

              <Grid gutter="xs" mb="xs">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Select
                    placeholder="Enchantment"
                    data={enchantmentAPINames.map(ench => ({ value: ench, label: ench }))}
                    value={newEnchantment}
                    onChange={value => setNewEnchantment(value || "")}
                    searchable
                    clearable
                    size="xs"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 4, sm: 2 }}>
                  <NumberInput
                    placeholder="Level"
                    min={1}
                    max={10}
                    value={newEnchantmentLevel}
                    onChange={value => setNewEnchantmentLevel((value as number) ?? 1)}
                    size="xs"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 8, sm: 4 }}>
                  <Button
                    onClick={addEnchantment}
                    leftSection={<FaPlus size={12} />}
                    fullWidth
                    size="xs"
                  >
                    Add
                  </Button>
                </Grid.Col>
              </Grid>

              {item.enchantments.length > 0 && (
                <Paper
                  p="xs"
                  withBorder
                  bg="gray.0"
                  style={{ maxHeight: "80px", overflowY: "auto" }}
                >
                  <Stack gap="xs">
                    {item.enchantments.map((ench, index) => (
                      <Group key={index} justify="space-between">
                        <Badge variant="light" color="blue" size="xs">
                          {ench}
                        </Badge>
                        <ActionIcon
                          size="xs"
                          color="red"
                          variant="subtle"
                          onClick={() => removeEnchantment(index)}
                        >
                          <FaTrash size={10} />
                        </ActionIcon>
                      </Group>
                    ))}
                  </Stack>
                </Paper>
              )}
            </Paper>

            {/* Potion Effects Section */}
            <Paper withBorder p="sm" radius="md">
              <Text fw={600} size="sm" mb="xs">
                🧪 Potion Effects
              </Text>

              <Grid gutter="xs" mb="xs">
                <Grid.Col span={{ base: 12, sm: 3 }}>
                  <Select
                    placeholder="Effect"
                    data={potionEffectsAPINames.map(potion => ({
                      value: potion,
                      label: potion,
                    }))}
                    value={newPotionEffect}
                    onChange={value => setNewPotionEffect(value || "")}
                    searchable
                    clearable
                    size="xs"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 4, sm: 2 }}>
                  <NumberInput
                    placeholder="Level"
                    min={0}
                    max={10}
                    value={newPotionEffectLevel}
                    onChange={value => setNewPotionEffectLevel((value as number) ?? 0)}
                    size="xs"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 4, sm: 3 }}>
                  <Select
                    data={[
                      { value: "self", label: "🛡️ Player" },
                      { value: "target", label: "☠️ Enemy" },
                    ]}
                    value={newPotionEffectTarget}
                    onChange={value =>
                      setNewPotionEffectTarget((value as "self" | "target") || "self")
                    }
                    size="xs"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 4, sm: 3 }}>
                  <Select
                    data={[
                      { value: "onHit", label: "⚔️ On Hit" },
                      { value: "continuous", label: "🔄 Continuous" },
                    ]}
                    value={newPotionEffectMethod}
                    onChange={value =>
                      setNewPotionEffectMethod((value as "onHit" | "continuous") || "onHit")
                    }
                    size="xs"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 1 }}>
                  <Button
                    onClick={addPotionEffect}
                    leftSection={<FaPlus size={10} />}
                    disabled={!newPotionEffect.trim()}
                    size="xs"
                    fullWidth
                  >
                    +
                  </Button>
                </Grid.Col>
              </Grid>

              {item.potionEffects.length > 0 && (
                <Paper
                  p="xs"
                  withBorder
                  bg="gray.0"
                  style={{ maxHeight: "80px", overflowY: "auto" }}
                >
                  <Stack gap="xs">
                    {item.potionEffects.map((potion, index) => {
                      const parts = potion.split(",");
                      const effectName = parts[0];
                      const level = parts[1];
                      const target = parts[2];
                      const method = parts[3];

                      const getTargetIcon = (t: string) => (t === "self" ? "🛡️" : "☠️");
                      const getMethodIcon = (m: string) => (m === "onHit" ? "⚔️" : "🔄");

                      return (
                        <Group key={index} justify="space-between">
                          <div style={{ flex: 1 }}>
                            <Badge variant="light" color="purple" size="xs">
                              {effectName} {level}
                            </Badge>
                            <Text size="xs" c="dimmed">
                              {getTargetIcon(target)} {getMethodIcon(method)}
                            </Text>
                          </div>
                          <ActionIcon
                            size="xs"
                            color="red"
                            variant="subtle"
                            onClick={() => removePotionEffect(index)}
                          >
                            <FaTrash size={10} />
                          </ActionIcon>
                        </Group>
                      );
                    })}
                  </Stack>
                </Paper>
              )}
            </Paper>

            {/* Actions */}
            <Group justify="space-between" mt="xs" wrap="wrap" gap="xs">
              <Button variant="outline" onClick={resetForm} size="xs">
                Reset
              </Button>
              <Group gap="xs">
                <Button variant="subtle" onClick={onClose} size="xs">
                  Cancel
                </Button>
                <Button
                  onClick={generateYAML}
                  color="green"
                  leftSection={<FaDice size={14} />}
                  size="sm"
                >
                  🎮 Generate Item
                </Button>
              </Group>
            </Group>
          </Stack>
        </Grid.Col>

        {/* Preview Section */}
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <Paper withBorder p="sm" radius="md" h="100%">
            <Stack gap="sm">
              <Text fw={600} size="sm">
                🎮 Preview
              </Text>

              <Paper
                p="sm"
                withBorder
                bg="gray.9"
                style={{ minHeight: "300px", maxHeight: "400px", overflowY: "auto" }}
              >
                <Stack gap="sm">
                  {/* Ícone e Nome do Item */}
                  {item.name && (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <MinecraftItemSprite material={item.material} size={32} />
                      <MinecraftText text={item.name} />
                    </div>
                  )}

                  {/* Lore */}
                  {item.lore.length > 0 && (
                    <div>
                      {item.lore.map((line, index) => (
                        <div key={index} style={{ marginBottom: "4px" }}>
                          <MinecraftText text={line} />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Encantamentos */}
                  {item.enchantments.length > 0 && (
                    <div>
                      <div style={{ marginTop: "8px", marginBottom: "4px" }}>
                        <MinecraftText text="&7Enchantments:" />
                      </div>
                      {item.enchantments.map((ench, index) => (
                        <div key={index} style={{ marginLeft: "8px" }}>
                          <MinecraftText text={`&7- ${ench}`} />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Efeitos de Poção */}
                  {item.potionEffects.length > 0 && (
                    <div>
                      <div style={{ marginTop: "8px", marginBottom: "4px" }}>
                        <MinecraftText text="&7Potion Effects:" />
                      </div>
                      {item.potionEffects.map((potion, index) => {
                        const parts = potion.split(",");
                        const effectName = parts[0];
                        const level = parts[1];
                        const target = parts[2];
                        const method = parts[3];

                        const getTargetIcon = (t: string) => (t === "self" ? "🛡️" : "☠️");
                        const getMethodIcon = (m: string) => (m === "onHit" ? "⚔️" : "🔄");

                        return (
                          <div key={index} style={{ marginLeft: "8px" }}>
                            <MinecraftText
                              text={`&7- ${effectName} ${level} ${getTargetIcon(target)} ${getMethodIcon(method)}`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Informações do Item */}
                  <div style={{ marginTop: "8px" }}>
                    <MinecraftText text={`&7Tipo: &f${item.itemType}`} />
                    {item.level && (
                      <div>
                        <MinecraftText text={`&7Level: &f${item.level}`} />
                      </div>
                    )}
                    {item.dropWeight && (
                      <div>
                        <MinecraftText text={`&7Drop: &f${item.dropWeight}%`} />
                      </div>
                    )}
                    <div>
                      <MinecraftText text={`&7Escalabilidade: &f${item.scalability}`} />
                    </div>
                    {item.customModelID && (
                      <div>
                        <MinecraftText text={`&7Model ID: &f${item.customModelID}`} />
                      </div>
                    )}
                    {item.customModelV2 && (
                      <div>
                        <MinecraftText text={`&7Model V2: &f${item.customModelV2}`} />
                      </div>
                    )}
                    {item.permission && (
                      <div>
                        <MinecraftText text={`&7Permissão: &f${item.permission}`} />
                      </div>
                    )}
                    <div>
                      <MinecraftText text={`&7Soulbound: &f${item.soulbound ? "Sim" : "Não"}`} />
                    </div>
                  </div>
                </Stack>
              </Paper>

              <Text size="xs" c="dimmed">
                💡 Use &color_code para formatação do Minecraft. Exemplos: &2, &c, &l, &, &m
                <br />
                <Link
                  href="https://minecraft.tools/en/color-code.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  📖 Ver todos os códigos de cor e formatação
                </Link>
              </Text>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Modal>
  );
};
