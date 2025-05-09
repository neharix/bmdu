# Generated by Django 5.1.4 on 2025-04-19 05:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0035_profile_temp_key'),
        ('mmu_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='educationcenter',
            name='country',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.country'),
        ),
        migrations.AddField(
            model_name='educationcenter',
            name='region',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.region'),
        ),
    ]
