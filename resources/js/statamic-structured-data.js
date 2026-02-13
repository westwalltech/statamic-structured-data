import StructuredDataBuilder from './components/fieldtypes/StructuredDataBuilder.vue';
import StructuredDataPreview from './components/fieldtypes/StructuredDataPreview.vue';
import StructuredDataObjectBuilder from './components/fieldtypes/StructuredDataObjectBuilder.vue';
import AvailableVariables from './components/fieldtypes/AvailableVariables.vue';

Statamic.booting(() => {
    // Inject Fieldtype mixin at registration time (not at module load time)
    // because the Fieldtype global isn't available until Statamic's CP JS loads.
    // Mutate directly rather than spreading to preserve Vue 3 SFC internals.
    [StructuredDataBuilder, StructuredDataPreview, StructuredDataObjectBuilder, AvailableVariables].forEach(component => {
        component.mixins = [Fieldtype, ...(component.mixins || [])];
    });

    Statamic.component('structured_data_builder-fieldtype', StructuredDataBuilder);
    Statamic.component('structured_data_preview-fieldtype', StructuredDataPreview);
    Statamic.component('structured_data_object_builder-fieldtype', StructuredDataObjectBuilder);
    Statamic.component('structured_data_available_variables-fieldtype', AvailableVariables);
});
