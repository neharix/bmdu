# Generated by Django 5.1.4 on 2025-02-22 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_expulsionreason'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='is_expelled',
            field=models.BooleanField(default=False),
        ),
    ]
