import StructuredDataBuilder from './components/fieldtypes/StructuredDataBuilder.vue';
import StructuredDataPreview from './components/fieldtypes/StructuredDataPreview.vue';
import StructuredDataObjectBuilder from './components/fieldtypes/StructuredDataObjectBuilder.vue';
import AvailableVariables from './components/fieldtypes/AvailableVariables.vue';

Statamic.booting(() => {
    // Inject Fieldtype mixin at registration time (not at module load time)
    // because the Fieldtype global isn't available until Statamic's CP JS loads
    const withFieldtype = (component) => ({
        ...component,
        mixins: [Fieldtype, ...(component.mixins || []).filter(m => m !== Fieldtype)],
    });

    Statamic.component('structured_data_builder-fieldtype', withFieldtype(StructuredDataBuilder));
    Statamic.component('structured_data_preview-fieldtype', withFieldtype(StructuredDataPreview));
    Statamic.component('structured_data_object_builder-fieldtype', withFieldtype(StructuredDataObjectBuilder));
    Statamic.component('structured_data_available_variables-fieldtype', withFieldtype(AvailableVariables));
});
