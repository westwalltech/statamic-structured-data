import StructuredDataBuilder from './components/fieldtypes/StructuredDataBuilder.vue';
import StructuredDataPreview from './components/fieldtypes/StructuredDataPreview.vue';
import StructuredDataObjectBuilder from './components/fieldtypes/StructuredDataObjectBuilder.vue';
import AvailableVariables from './components/fieldtypes/AvailableVariables.vue';

Statamic.booting(() => {
    // In Statamic 6, Fieldtype is not a global. It's provided via the @statamic/cms
    // package at window.__STATAMIC__.core.FieldtypeMixin (Options API mixin).
    const FieldtypeMixin = window.__STATAMIC__.core.FieldtypeMixin;

    [StructuredDataBuilder, StructuredDataPreview, StructuredDataObjectBuilder, AvailableVariables].forEach(component => {
        component.mixins = [FieldtypeMixin, ...(component.mixins || [])];
    });

    Statamic.component('structured_data_builder-fieldtype', StructuredDataBuilder);
    Statamic.component('structured_data_preview-fieldtype', StructuredDataPreview);
    Statamic.component('structured_data_object_builder-fieldtype', StructuredDataObjectBuilder);
    Statamic.component('structured_data_available_variables-fieldtype', AvailableVariables);
});
