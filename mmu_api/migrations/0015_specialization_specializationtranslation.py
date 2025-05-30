# Generated by Django 5.2.1 on 2025-05-27 17:51

import django.db.models.deletion
import parler.fields
import parler.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mmu_api', '0014_remove_staff_specializations_delete_specialization'),
    ]

    operations = [
        migrations.CreateModel(
            name='Specialization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'abstract': False,
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='SpecializationTranslation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('name', models.CharField(max_length=500)),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='mmu_api.specialization')),
            ],
            options={
                'verbose_name': 'specialization Translation',
                'db_table': 'mmu_api_specialization_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
    ]
