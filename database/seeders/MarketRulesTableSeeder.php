<?php

namespace Database\Seeders;

use App\Models\MarketRule;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MarketRulesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $marketRules = [
            [
                'market_id' => '0',
                'rule' => 'It is a long established fact that a reader will be distracted...',
            ],
            [
                'market_id' => '1',
                'rule' => 'Parturient sollicitudin vivamus tempus ante velit neque platea...',
            ],
            [
                'market_id' => '2',
                'rule' => 'Lectus primis vehicula augue pharetra rhoncus...',
            ],
        ];

        foreach ($marketRules as $marketRule) {
            MarketRule::create($marketRule);
        }
    }
}
