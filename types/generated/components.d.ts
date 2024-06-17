import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsSkillTile extends Schema.Component {
  collectionName: 'components_elements_skill_tiles';
  info: {
    displayName: 'Skill Tile';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
    Alt_Text: Attribute.String;
  };
}

export interface SectionsAboutMeSection extends Schema.Component {
  collectionName: 'components_sections_about_me_sections';
  info: {
    displayName: 'Text Section - Image Left';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    header: Attribute.String;
    paragraph: Attribute.String;
  };
}

export interface SectionsRowCentered extends Schema.Component {
  collectionName: 'components_sections_row_centereds';
  info: {
    displayName: 'Row - Centered';
  };
  attributes: {
    Skill_Tile: Attribute.Component<'elements.skill-tile', true>;
  };
}

export interface SeoMetadata extends Schema.Component {
  collectionName: 'components_seo_metadata';
  info: {
    displayName: 'metadata';
    description: '';
  };
  attributes: {
    meta_title: Attribute.String & Attribute.DefaultTo<'Meta Title'>;
    meta_description: Attribute.Text;
    meta_image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.skill-tile': ElementsSkillTile;
      'sections.about-me-section': SectionsAboutMeSection;
      'sections.row-centered': SectionsRowCentered;
      'seo.metadata': SeoMetadata;
    }
  }
}
