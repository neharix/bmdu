# Generated by Django 5.1.4 on 2024-12-23 18:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_country_nationality_region_delete_degree'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='country',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='nationality',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='region',
            options={'ordering': ['name']},
        ),
    ]