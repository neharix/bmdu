# Generated by Django 5.1.4 on 2025-02-27 18:48

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_remove_diplomarequest_update_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='diplomarequest',
            name='allowed_until',
            field=models.DateTimeField(default=datetime.datetime(2025, 3, 29, 18, 48, 13, 949819, tzinfo=datetime.timezone.utc)),
        ),
    ]
