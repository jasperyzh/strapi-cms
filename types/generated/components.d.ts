import type { Schema, Struct } from '@strapi/strapi';

export interface ConfigSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_config_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'puzzle-piece';
  };
  attributes: {
    icon: Schema.Attribute.String;
    platform: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Feature';
    icon: 'puzzle-piece';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPlan extends Struct.ComponentSchema {
  collectionName: 'components_sections_plans';
  info: {
    displayName: 'Pricing Plan';
    icon: 'puzzle-piece';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    features: Schema.Attribute.JSON;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    period: Schema.Attribute.String;
    price: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'puzzle-piece';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'config.social-link': ConfigSocialLink;
      'sections.feature': SectionsFeature;
      'sections.plan': SectionsPlan;
      'sections.testimonial': SectionsTestimonial;
    }
  }
}
