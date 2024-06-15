import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAboutSection extends Schema.Component {
  collectionName: 'components_blocks_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    profileImage: Attribute.Media<'images'>;
    title: Attribute.String;
    paragraph: Attribute.Text;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    mainText: Attribute.String;
    description: Attribute.String;
  };
}

export interface BlocksSkillsSection extends Schema.Component {
  collectionName: 'components_blocks_skills_sections';
  info: {
    displayName: 'Skills Section';
  };
  attributes: {
    header: Attribute.String;
  };
}

export interface ElementsSkill extends Schema.Component {
  collectionName: 'components_elements_skills';
  info: {
    displayName: 'Skill';
  };
  attributes: {
    skill: Attribute.Media<'images'>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    description: Attribute.Text;
    metaImage: Attribute.Media<'images', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.about-section': BlocksAboutSection;
      'blocks.hero': BlocksHero;
      'blocks.skills-section': BlocksSkillsSection;
      'elements.skill': ElementsSkill;
      'seo.meta-data': SeoMetaData;
    }
  }
}
